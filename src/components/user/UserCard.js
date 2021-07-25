import React, {useState, useEffect} from 'react'

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import editIcon from '@iconify-icons/akar-icons/edit';

export default function UserCard() {
    const [data, setData] = useState({users: []})

    useEffect(() => {
        fetch('http://localhost:4000/api/users')
            .then (results => results.json())
            .then (results => setData({
                ...data,
                users: results
            }))
    }, [])
     
    return (
        <>
        {data.users.map(user => (
        <div class="houseCard">
            <div class="cardContent">
                <h1>{user.name}</h1>
                <div class="cardMiddle">
                    <p>{user.email}</p>
                    <p>{user.phone_number}</p>
                </div>
                <div class="cardIcons">
                    <Icon icon={delete24Regular} className="image-icon" color="#E40707" width='2em'/>
                </div> 
            </div>     
        </div>
        ))}
        </>
    )
}