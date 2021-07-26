import React, { useState, useEffect } from 'react'
import {
  useParams
} from 'react-router-dom'
import NewHouse from "../../components/house/NewHouse"
import CardContainer from '../../components/card_container/CardContainer'
import UserCard from '../../components/user/UserCard'

import './styles.scss'
import API from '../../helpers/api'

const UpdatePropertyPage = () => {

  const [uploadImage, setUploadImage] = useState(() => () => {})
  const { id } = useParams()

  const [houseData, setHouseData] = useState({
    property: {},
    tenants: []
  })
  const [formValues, setFormValues] = useState({})
  const [possibleTenants, setPossibleTenants] = useState([])

  useEffect(() => {
    API.request(`houses/${id}`)
        .then (res => res.data)
        .then (data => setHouseData(data))
  }, [])

  useEffect(() => {
    if(!houseData) return

    setFormValues({
      title: houseData.property.title,
      address: houseData.property.address,
      image_url: houseData.property.image_url,
      tenants: houseData.tenants.map(tenant => tenant.id)
    })
  }, [houseData])

  useEffect(() => {
    API.request('users')
    .then (res => res.data)
    .then (data => setPossibleTenants(data))
  }, [])

  const handleChange = (e) => {
      setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault()

      console.log(houseData.property.image_url)
      uploadImage()
      .then(url => {
          API.request(`houses/${id}`, {
              method: "PATCH",
              data: JSON.stringify({...formValues, image_url: url}),
              headers: {
                  "Content-Type": "application/json",
              },
          })
      })
      .catch(res => console.log(res.data))
  }

  function addTenant(e) {
    const tenant = possibleTenants.find(tenant => tenant.id == e.currentTarget.value)

    setHouseData({
      property: houseData.property,
      tenants: [...houseData.tenants, tenant]
    })
    setFormValues({
      ...formValues,
      tenants: [...formValues.tenants, e.currentTarget.value]
    })
  }

  function calculatedPossibleTenants() {
    const houseTenantIds = houseData.tenants.map(tenant => tenant.id)
    return possibleTenants.filter(tenant => !houseTenantIds.includes(tenant.id))
  }

  function deleteUser(id) {

    if (!window.confirm('Are you sure?')) {
      return
    }
    const index = houseData.tenants.findIndex(tenant => tenant.id == id)
    
    const tenants = [...houseData.tenants.slice(0, index), ...houseData.tenants.slice(index + 1)]

    setHouseData({
      property: houseData.property,
      tenants: tenants
    })
    setFormValues({
      ...formValues,
      tenants: tenants.map(t => t.id)
    })
  }

  return (
    
    <NewHouse 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      formValues={formValues} 
      setUploadImage={setUploadImage}
      action={"Update Property"}
      url={houseData.property.image_url}>

      <CardContainer heading={"Tenants"}>
        {houseData.tenants.map(tenant => (
          <UserCard {...tenant} onDelete={deleteUser} />
        ))}
      </CardContainer>
      <select name='tenant_id' value={''} onChange={addTenant}>
        <option value='' disabled selected>Add Tenant</option>
        {calculatedPossibleTenants().map(tenant => (
          tenant.role_name === "tenant" && <option value={tenant.id}>{tenant.name}</option>
        ))}
    
      </select>
      
    </NewHouse>

  )
}

export default UpdatePropertyPage
