import React from 'react'
import { useTransition } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Card, Flex } from 'antd';


import "./index.css";

const About = () => {
    const [cards, setCards] = useState([]);
    const getCards = async () => {
        const data = await axios("https://fakestoreapi.com/products");
        setCards(data.data)
    }
    useEffect(() => {
        getCards()
    }, [])




        return (

          <div className="cardholder">
            {cards && cards.map((item)=>(
                <div key={item.id} className="card" style={{width:400, height:400}} >
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.catefory}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
          </div>

        );
}
export default About
