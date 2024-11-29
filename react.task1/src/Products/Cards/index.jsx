import React from 'react'
import "./index.css"

const Cards = (props) => {
  return (
   <div className="card">
    <h2>Name: {props.title}</h2>
    <h3> Color: {props.color}</h3>
    <p>Kg: {props.kg}</p>
   </div>
  )
}

export default Cards
