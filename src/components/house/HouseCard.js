import React, {useState, useEffect} from 'react'
import "./styles.scss"

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import editIcon from '@iconify-icons/akar-icons/edit';

export default function HouseCard() {
    const [data, setData] = useState({houses: []})
    const [id, setId] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/api/houses')
            .then (results => results.json())
            .then (results => setData({
                ...data,
                houses: results
            }))
    }, [])


    // function deleteHouse() {
    //     fetch(`http://localhost:4000/api/houses/${house_id}`, { method: 'DELETE' })        
    // }
  
    return (
        <>
        {data.houses.map(house => (
        <div class="houseCard">
            <div class="cardContent">
                <h1>{house.title}</h1>
                <div class="cardMiddle">
                    <img src={house.image_url} width="100px"/>
                    <p>{house.address}</p>
                </div>
                <div class="cardIcons">
                    <Icon icon={editIcon} className="image-icon" color="#2A2B77" width='2em'/>
                    <Icon icon={delete24Regular} className="image-icon" color="#E40707"  width='2em'/>
                </div> 
            </div>     
        </div>
        ))}
        </>
    )
}
