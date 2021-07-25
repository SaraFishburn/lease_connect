import React, { useState, useEffect } from 'react'
import {
  useParams
} from 'react-router-dom'
import NewHouse from "../../components/house/NewHouse"
import CardContainer from '../../components/card_container/CardContainer'
import UserCard from '../../components/user/UserCard'

import './styles.scss'

const UpdatePropertyPage = () => {

  const [uploadImage, setUploadImage] = useState(() => () => {})
  let { id } = useParams()

  const [houseData, setHouseData] = useState()
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/api/houses/${id}`)
        .then (res => res.json())
        .then (data => setHouseData(data))
  }, [])

  useEffect(() => {
    if(!houseData) return

    console.log(houseData)

    setFormValues({
      title: houseData.property.title,
      address: houseData.property.address,
      image_url: houseData.property.image_url
    })
  }, [houseData])

  const handleChange = (e) => {
      setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault()

      uploadImage()
      .then(url => {
          fetch("http://localhost:4000/api/houses", {
              method: "POST",
              body: JSON.stringify({...formValues, image_url: url}),
              headers: {
                  "Content-Type": "application/json",
              },
          })
      })
      .catch(err => console.log(err))
      setFormValues({
        title: "",
        address: "",
        image_url: ""
      })
  }

  return (
    
    <NewHouse 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      formValues={formValues} 
      setUploadImage={setUploadImage}
      action={"Update Property"}>

      <CardContainer heading={"Tenants"}>
        {houseData && houseData.tenants.map(tenant => (
          <UserCard {...tenant} />
        ))}
          
      </CardContainer>
      
    </NewHouse>

  )
}

export default UpdatePropertyPage
