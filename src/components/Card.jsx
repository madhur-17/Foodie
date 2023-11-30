import React, { useState } from 'react'
import { IMG } from '../constants'

function Card({
    cloudinaryImageId,
    name,
    cuisines,
    areaName
,
    totalRatingsString,
            }) 
            {
    
  return (
    <div style={{width:300, border:'2px solid rgba(1,1,1,1)', padding:5, margin:10 }}>

    <div style={{padding:10}}>
      <img src={IMG+cloudinaryImageId} style={{width:"100%"}}/>
      <h1>{name}</h1>
      <h6>{areaName}</h6>
      <h3>{cuisines}</h3>
      <h4>{totalRatingsString}</h4>
</div>
    </div>
  )
}

export default Card
