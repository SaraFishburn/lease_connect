import React, {useState, useEffect} from 'react'
import {
    Link,
  } from "react-router-dom";
import "./styles.scss"

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import noteEditLine from '@iconify-icons/clarity/note-edit-line';
import bxImageAlt from '@iconify-icons/bx/bx-image-alt';

export default function HouseCard(props) {
    const [editHover, setEditHover] = useState()
    const [deleteHover, setDeleteHover] = useState()

    return (
        <div class="house-card">
            <div class="card-content">
                <h1>{props.title}</h1>
                <div class="card-middle">
                    <div className='img-frame'>
                        <Icon icon={bxImageAlt} className="img-placeholder" color="#2A2B77" />
                        <img src={props.image_url} height="150px"/>
                    </div>
                    <p>{props.address}</p>
                </div>
            </div>     
            <div class="card-icons">
                <div 
                    className="edit-icon-div"
                    onMouseEnter={() => setEditHover(true)}
                    onMouseLeave={() => setEditHover(false)}>
                    <Link to={`/houses/edit/${props.id}`}>
                        <Icon
                            className={`icon${editHover ? '-white' : ''}`}
                            icon={noteEditLine} 
                            color={editHover ? "#FFFFFF" : "#2A2B77"}
                        />
                    </Link>
                </div>
                <div
                    className="delete-icon-div"
                    onMouseEnter={() => setDeleteHover(true)}
                    onMouseLeave={() => setDeleteHover(false)}
                >
                <Icon
                    onClick={() => props.onDelete ? props.onDelete(props.id) : () => {}}
                    className={`delete-icon${deleteHover ? '-white' : ''}`}
                    icon={delete24Regular} 
                    color={deleteHover ? "#FFFFFF" : "#2A2B77"}
                />
                </div>
            </div> 
        </div>
    )
}
