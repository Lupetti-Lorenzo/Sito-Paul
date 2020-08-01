import React from 'react'

import PlusMinusButton from "../containers/plusMinusButton.container"

import "./cartItem.scss"



export default function CartItem({ id, imageUrl, price, name, quantity, size }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <p className="name">{name}</p>
                <span>{quantity} x ${price}</span>
                <PlusMinusButton operator="+"  id={id} size={size} quantity={quantity}/>
                <PlusMinusButton operator="-" id={id} size={size} quantity={quantity}/>
                <span>Size: {size}</span>
            </div>
        </div>
    )
}

