import React, { useState, useEffect } from 'react'
import UpdateAccount from '../../components/user/UpdateAccount'
import UpdatePassword from '../../components/user/UpdatePassword'
import API from '../../helpers/api'

const UpdateAccountPage = (props) => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    API.request("user")
    .then(res => setUserData(res.data))
  }, [])

  return (
    <>
      <UpdateAccount user={userData}/>
      <UpdatePassword />
    </>
  )
}

export default UpdateAccountPage
