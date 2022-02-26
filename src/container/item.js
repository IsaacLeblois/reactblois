import React from 'react'
import "../styles/item.css"

const Item = (props) => {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h2>{props.manufacturer}</h2>
        <h6>{props.price}M USD.</h6>
    </div>
  )
}

export default Item