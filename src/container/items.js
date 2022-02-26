import React, { useState } from 'react';
import Item from './item';

const Items = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "A380-800",
            manufacturer: "Airbus",
            price: 338.4
        },
        {
            id: 2,
            name: "B747-8",
            manufacturer: "Boeing",
            price: 306.2
        },
        {
            id: 3,
            name: "An124",
            manufacturer: "Antonov",
            price: 80
        }
    ])

  return (
    <div>
        <h1>Aeronaves</h1>
        {items.map( c => <Item name={c.name} manufacturer={c.manufacturer} price={c.price}/>
        )}
    </div>
  )
}

export default Items