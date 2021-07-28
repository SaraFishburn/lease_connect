import React, { useState, useEffect } from 'react'
import UpdateAccount from '../../components/user/UpdateAccount'
import UpdatePassword from '../../components/user/UpdatePassword'
import API from '../../helpers/api'
import './styles.scss'

const UpdateAccountPage = (props) => {

  return (
    <div className="my-account-page">
      <UpdateAccount user={props.user}/>
      <UpdatePassword />
    </div>
  )
}

export default UpdateAccountPage
