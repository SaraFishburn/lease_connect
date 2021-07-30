import React, { useState } from 'react'
import NewHouse from "../../components/house/NewHouse"
import API from '../../helpers/api'

const CreatePropertyPage = () => {
  const [uploadImage, setUploadImage] = useState(() => () => {})

  const defaultFormValues = {
      title: "",
      address: "",
      image_url: "",
  }

  const [formValues, setFormValues] = useState(defaultFormValues);

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
          API.request("houses", {
              method: "POST",
              data: {...formValues, image_url: url},
              headers: {
                  "Content-Type": "application/json",
              },
          })
      })
      .catch(res => console.log(res.data))
      setFormValues(defaultFormValues)
  }

  return (
    <NewHouse 
    handleChange={handleChange} 
    handleSubmit={handleSubmit} 
    formValues={formValues} 
    setUploadImage={setUploadImage}
    action={"Create Property"} />
  )
}

export default CreatePropertyPage
