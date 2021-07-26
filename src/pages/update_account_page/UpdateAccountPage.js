import React, { useState, useEffect } from 'react'
import UpdateAccount from '../../components/user/UpdateAccount'
import UpdatePassword from '../../components/user/UpdatePassword'

const UpdateAccountPage = () => {

  const [userData, setUserData] = useState({})

  return (
    <>
      <UpdateAccount />
      <UpdatePassword />
    </>
  )
}

export default UpdateAccountPage
