import React, { useState, useEffect } from 'react'
import {
  useParams
} from 'react-router-dom'

import CardContainer from '../../components/card_container/CardContainer'
import HouseCard from '../../components/house/HouseCard'
import UserCard from '../../components/user/UserCard'
import DocumentCard from '../../components/documents/DocumentCard'

import { Icon } from '@iconify/react';
import cloudUpload from '@iconify-icons/carbon/cloud-upload';


import './styles.scss'
import API from '../../helpers/api'

const PropertyShowPage = () => {

  const { id } = useParams()

  const [uploadHover, setUploadHover] = useState()
  const [houseData, setHouseData] = useState({
    property: {},
    tenants: []
  })

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
        setUploadHover={setUploadHover}>
        <small>*1 page PDF's only</small>
        {/* <DocumentCard /> */}
      </CardContainer>
    </div>
  )
}

export default PropertyShowPage
