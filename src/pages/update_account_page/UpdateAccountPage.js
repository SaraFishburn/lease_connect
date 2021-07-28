import React, { useState, useEffect } from 'react'
import UpdateAccount from '../../components/user/UpdateAccount'
import UpdatePassword from '../../components/user/UpdatePassword'
import API from '../../helpers/api'
import './styles.scss'

const UpdateAccountPage = (props) => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    API.request("user")
    .then(res => setUserData(res.data))
  }, [])

  return (
    <div className="my-account-page">
      <UpdateAccount user={userData}/>
      <UpdatePassword />
    </div>
  )
}

export default UpdateAccountPage
