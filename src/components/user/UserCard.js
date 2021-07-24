import React, {useState, useEffect} from 'react'

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import editIcon from '@iconify-icons/akar-icons/edit';
import './styles.scss'

export default function UserCard(props) {


    return (
        <div class="user-card">
            <div class="card-content">
                <h1>{props.name}</h1>
                <div class="card-middle">
                    <p>{props.email}</p>
                    <p>{props.phone_number}</p>
                </div>
            </div>     
            <div class="card-icons">
                <div className="delete-icons">
                    <Icon className="delete" icon={delete24Regular} color="#2A2B77" />
                </div>
            </div> 
        </div>
    )
}