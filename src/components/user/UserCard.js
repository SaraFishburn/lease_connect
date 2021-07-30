import React, {useState, useEffect, useRef} from 'react'

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';

import './styles.scss'

export default function UserCard(props) {

    const [hover, setHover] = useState(false)

    return (
        <div class="user-card">
            <div class="card-content">
                <h1>{props.name}</h1>
                <div class="card-middle">
                    <p>{props.email}</p>
                    <p>{props.phone_number}</p>
                </div>
            </div>     
            <div
              class="card-icons"
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