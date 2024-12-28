import { Button, Card } from 'antd'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../Product/index.module.scss'
// import { Input } from 'antd';
import { Link } from "react-router-dom"
const { Meta } = Card;

const Detail = () => {


  const [product, setProduct] = useState(null)
    const {id} = useParams()

    const getProduct = async() => {
      try {
        const {data} = await axios (`http://localhost:8000/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error);
      }
    }
useEffect(() => {
  getProduct()
}, [])

  return (
    <div>
    {product && (
      <Card className={styles.card}
      key = {product.id}
      hoverable
      style={{
          width: 240,
      }}
      cover={<img alt="example" src={product.image} />}
  >
      <Meta title={product.title} description={product.description.slice(0 - 50)} />

      {/* <Link to={`${product.id}`}>
          <Button className={styles.detailbtn}>Detail</Button>

      </Link> */}
  </Card>

    )}
    </div>
  )
}

export default Detail
