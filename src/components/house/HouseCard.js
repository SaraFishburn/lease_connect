import React, {useState, useEffect} from 'react'
import "./styles.scss"

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import editIcon from '@iconify-icons/akar-icons/edit';

export default function HouseCard(props) {
    console.log(props)
     
    return (
    <div class="house-card">
        <div class="card-content">
            <h1>{props.title}</h1>
            <div class="card-middle">
                <img src={props.image_url} width="100px"/>
                <p>{props.address}</p>
            </div>
        </div>     
        <div class="card-icons">
            <Icon icon={delete24Regular} />
            <Icon icon={editIcon} />  
        </div> 
    </div>
    )
}
