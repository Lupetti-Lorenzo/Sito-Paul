import React from 'react'
import { Link } from "react-router-dom"

import "./product.scss"
 
//id, img, name, price
const Product = ({ name, price, images }) => (
    <div className="product-container">
        <Link to={`/products/${name}`}>
            <div className="product">
                <img src={images.front} alt="no img"/>
            </div>
            <div className="product-name">
                    <p>{name}</p>  <p>-- {price}</p>
            </div>  
        </Link> 
    </div>
)

export default Product