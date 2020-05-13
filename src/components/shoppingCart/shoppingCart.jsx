import React from 'react'

import "./shoppingCart.scss"

import CartItem from "../cartItem/cartItem"

export default function ShoppingCart({ active, cartItems }) {
    return (
        <div id="shoppingSlider" className={ active ? "open" : ""}>
            <div id="padding">
                <h2><b>Your cart</b></h2>
                {
                    cartItems.map(item => <CartItem key={item.id} { ...item }/>)
                }
            </div>
        </div>
    )
}
