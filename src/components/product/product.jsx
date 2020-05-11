import React from 'react'

import "./product.scss"
 
//id, img, name, price
const Product = ({ name, price, imageUrl, category }) => (
    <div className="product-container">
            <div className="product">
                <img src={imageUrl} alt="no img"/>
            </div>

            <div className="product-name">
                <a href="">
                    <p>{name}</p>  <p>-- {price}</p>
                </a>
                <p>{category}</p>
            </div>   
    </div>
)

export default Product