import React, { useState, useEffect } from 'react'
import HouseCard from '../../components/house/HouseCard'
import CardContainer from '../../components/card_container/CardContainer'
import './styles.scss'

const PmHomePage = () => {

  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/houses')
        .then (res => res.json())
        .then (data => setHouses(data))
  }, [])

  return (
    <div className="pm-home-page">
      <CardContainer>
        {houses.map(house => (
            <HouseCard {...house} />
          ))}
      </CardContainer>
    </div>
  )
}

export default PmHomePage
