import React, { useState, useEffect } from 'react'
import HouseCard from '../../components/house/HouseCard'
import CardContainer from '../../components/card_container/CardContainer'
import './styles.scss'
import API from '../../helpers/api'

const PmHomePage = () => {

  const [houses, setHouses] = useState([])

  useEffect(() => {
    API.request('houses')
        .then (res => res.data)
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
