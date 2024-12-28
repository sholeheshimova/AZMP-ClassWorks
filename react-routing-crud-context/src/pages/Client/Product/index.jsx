import React, { useContext } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Card } from 'antd';
const { Meta } = Card;
import styles from '../Product/index.module.scss'
import { Input } from 'antd';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { FavoritesContext } from '../../../context/FavoritesContext';
// import { FavoritesContext } from '../../../context/FavoritesContext';
// import React, { createContext } from 'react'

const Product = () => {

    const [product, setProduct] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { favorites,toggleFavorite } = useContext(FavoritesContext);
    const filteredProducts = product.filter((p) =>
        p.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.trim());
    };
    const getProduct = async () => {
        const data = await axios("http://localhost:8000/products");
        setProduct(data.data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <Input placeholder='search here...' className={styles.productinput} onChange={handleSearch} />

            <div className={styles.product}>
                {filteredProducts && filteredProducts.map((item) => (
                    <Card className={styles.card}
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src={item.image} />}
                    >
                        <Meta title={item.title} description={item.description.slice(0 - 50)} />

                        <Link to={`${item.id}`}>
                            <Button className={styles.detailbtn}>Detail</Button>

                        </Link>
                        <Button onClick={() => toggleFavorite(item)}  >

                        {favorites.find((q) => q.id === item.id) ? <FaHeart /> : <FaRegHeart />}
                        </Button>
                    </Card>

                ))}

            </div>
        </>

    )
}

export default Product
