import React from 'react'

import "./cartItem.scss"



export default function CartItem({ imageUrl, price, name, quantity, size }) {
    return (
        <div className="cart-item">
                <img src={imageUrl} alt="item" />
            <div className="item-details">
                <p className="name">{name}</p>
                <span>{quantity} x ${price}</span>
                <span>Size: {size}</span>
            </div>
        </div>
    )
}

