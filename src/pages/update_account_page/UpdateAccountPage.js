import React, { useState, useEffect } from 'react'
import UpdateAccount from '../../components/user/UpdateAccount'
import UpdatePassword from '../../components/user/UpdatePassword'

const UpdateAccountPage = () => {

  const [userData, setUserData] = useState({})

  // useEffect(() => {
  //   fetch(`http://localhost:4000/api/users/${id}`)
  //       .then (res => res.json())
  //       .then (data => setUserData(data))
  // }, [])

  return (
    <>
      <UpdateAccount />
      <UpdatePassword />
    </>
  )
}

export default UpdateAccountPage
