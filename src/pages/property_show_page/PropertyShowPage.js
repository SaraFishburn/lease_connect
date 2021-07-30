import React, { useState, useEffect, useRef } from 'react'
import {
  useParams
} from 'react-router-dom'

import CardContainer from '../../components/card_container/CardContainer'
import HouseCard from '../../components/house/HouseCard'
import UserCard from '../../components/user/UserCard'
import DocumentCard from '../../components/documents/DocumentCard'
import MaintenanceDisplay from '../../components/maintenance_display/MaintenanceDisplay'

import { Icon } from '@iconify/react';
import cloudUpload from '@iconify-icons/carbon/cloud-upload';


import './styles.scss'
import API from '../../helpers/api'

const PropertyShowPage = (props) => {

  const [image, setImage ] = useState("");
  const [documents, setDocuments] = useState([])
  const [maintenances, setMaintenances] = useState([])
  const inputRef = useRef()

  const { id } = useParams()

  const [uploadHover, setUploadHover] = useState()
  const [houseData, setHouseData] = useState({
    property: {},
    tenants: []
  }) 

  useEffect(() => {
    if(image === "") {return}
    handleSubmit()
  }, [image])

  useEffect(() => {
    API.request(`houses/${id}/documents`)
    .then(res => setDocuments(res.data))
    
    API.request(`houses/${id}/maintenances`)
    .then(res => setMaintenances(res.data))
  }, [])

  function uploadImage() {
    if(image === "") {
      return new Promise((_, rej) => rej("No document Supplied! :'("))
    }
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", process.env.REACT_APP_IMAGE_PRESET )
    data.append("cloud_name", process.env.REACT_APP_IMAGE_ACCOUNT )
    return fetch( process.env.REACT_APP_IMAGE_FETCH , {
        method:"post",
        body: data
    })
    .then(res => res.json())
    .then(image_data => image_data.url.replace('.pdf', '.png'))
  }

  const handleSubmit = () => {
    uploadImage()
    .then(url => {
        API.request(`houses/${id}/documents`, {
            method: "POST",
            data: {
              title: image.name.split('.')[0],
              document_url: url
            },
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
          setDocuments([...documents, {title: image.name.split('.')[0], document_url: url}])
        })
    })
    .catch(res => console.log(res.data))
  }

  useEffect(() => {
    API.request(`houses/${id}`)
        .then (res => res.data)
        .then (data => setHouseData(data))
  }, [])

  return (
    <div className="house-show">
      <div className="house-card-heading">
        <CardContainer>
          <HouseCard {...houseData.property}/>
        </CardContainer>
      </div>
      <CardContainer heading={'Tenants'}>
        {houseData.tenants.map(tenant => (
            <UserCard {...tenant} />
          ))}
      </CardContainer>
      <CardContainer 
        heading="Documents" 
        uploadIcon={
        <Icon 
          icon={cloudUpload} 
          className="upload-icon"
          color={uploadHover ? "#FFFFFF" : "#2A2B77"}/>
        }
        setUploadHover={setUploadHover}
        handleClick={() => inputRef.current.click()}
        >
        <small>*1 page PDF's only</small>
        <form>
          <input
              ref={inputRef}
              class="image-upload-input" 
              type="file" 
              onChange={(e)=> {
                  e.target.files[0] != undefined && setImage(e.target.files[0])
              }}>
          </input>
        </form>
        {documents.map((_, i) => (
          <DocumentCard {...documents[documents.length - 1 - i]} />
        ))}
      </CardContainer>
      <CardContainer heading="Maintenance">
        {maintenances.map((_, i) => (
            <MaintenanceDisplay {...maintenances[maintenances.length - 1 - i]} />
        ))}
      </CardContainer>
    </div>
  )
}

export default PropertyShowPage
