import React, { useState, useEffect } from 'react'
import {
  useHistory
} from "react-router-dom";

import CardContainer from '../../components/card_container/CardContainer'
import UserCard from '../../components/user/UserCard'
import HouseCard from '../../components/house/HouseCard'
import './styles.scss'
import API from '../../helpers/api';

const AdminHomePage = () => {
  const history = useHistory()

  const [users, setUsers] = useState([])
  const [houses, setHouses] = useState([])

  useEffect(() => {
      API.request('users')
          .then (res => res.data)
          .then (data => setUsers(data))
  }, [])

  useEffect(() => {
      API.request('houses')
          .then (res => res.data)
          .then (data => setHouses(data))
  }, [])

  const handleDelete = (action, i, id, path) => {
    if (!window.confirm('Are you sure?')) return

    API.request(`${path}/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      action(array => [...array.slice(0, i), ...array.slice(i + 1)])
    }).catch(err => alert(err.response.data.error))
  }

  return (
    <>
      <CardContainer heading={"Property Managers"}>
        {users.map((user, i) => (
          user.role_name === "property manager" && <UserCard {...user} deleteUser={() => handleDelete(setUsers, i, user.id, 'users')} />
        ))}
      </CardContainer>
    
      <CardContainer heading={"Properties"}>
        {houses.map((house, i) => (
          <HouseCard {...house} 
            deleteHouse={() => handleDelete(setHouses, i, house.id, 'houses')} 
            onClick={() => history.push(`houses/view/${house.id}`)}/>
        ))}
      </CardContainer>

      <CardContainer heading={"Tenants"}>
        {users.map((user, i) => (
          user.role_name === "tenant" && <UserCard {...user} deleteUser={() => handleDelete(setUsers, i, user.id, 'users')} />
        ))}
      </CardContainer>
    </>
  )
}

export default AdminHomePage
