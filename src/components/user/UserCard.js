import React, {useState } from 'react'

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';

import './styles.scss'

export default function UserCard(props) {

    const [hover, setHover] = useState(false)

    return (
        <div className="user-card">
            <div className="card-content">
                <h1>{props.name}</h1>
                <div className="card-middle">
                    <p>{props.email}</p>
                    <p>{props.phone_number}</p>
                </div>
            </div>     
            <div
              className="card-icons"
              onMouseEnter={() => setHover(true)} 
              onMouseLeave={() => setHover(false)}
              onClick={props.deleteUser}>
              <Icon
                className={`delete-icon${hover ? '-white' : ''}`}
                icon={delete24Regular} 
                color={hover ? "#FFFFFF" : "#2A2B77"} />
            </div> 
        </div>
  
    )
}