import React, { useState, useEffect } from 'react'
import {
  Link
} from "react-router-dom";

import CardContainer from '../../components/card_container/CardContainer'
import UserCard from '../../components/user/UserCard'
import HouseCard from '../../components/house/HouseCard'
import './styles.scss'

const AdminHomePage = () => {

  const [users, setUsers] = useState([])
  const [houses, setHouses] = useState([])

  useEffect(() => {
      fetch('http://localhost:4000/api/users')
          .then (res => res.json())
          .then (data => setUsers(data))
  }, [])

  useEffect(() => {
      fetch('http://localhost:4000/api/houses')
          .then (res => res.json())
          .then (data => setHouses(data))
  }, [])

  return (
    <>
      <CardContainer heading={"Property Managers"}>
        {users.map(user => (
          user.role_name === "property manager" && <UserCard {...user} />
        ))}
      </CardContainer>
    
      <CardContainer heading={"Properties"}>
        {houses.map(house => (
          <Link to={`houses/view/${house.id}`}><HouseCard {...house} /></Link>
        ))}
      </CardContainer>

      <CardContainer heading={"Tenants"}>
        {users.map(user => (
          user.role_name === "tenant" && <UserCard {...user} />
        ))}
      </CardContainer>
    </>
  )
}

export default AdminHomePage
