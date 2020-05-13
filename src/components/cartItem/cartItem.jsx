import React from 'react'

import "./cartItem.scss"



export default function CartItem({ imageUrl, price, name, quantity }) {
    return (
        <div className="cart-item">
            <div className="img">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="item-details">
                <p className="name">{name}</p>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

