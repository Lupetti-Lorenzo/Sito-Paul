import React from 'react'

import "./shoppingCart.scss"

import CartItem from "../cartItem/cartItem"

export default function ShoppingCart({ active, cartItems, toggleShopping }) {
    return (
        <div id="shoppingSlider" className={ active ? "open" : ""}>
            <div id="padding">
                <span id="your-cart"><i /><b>Your cart</b><i className="fas fa-times" onClick={() => toggleShopping()} ></i></span>
                            
                {
                    cartItems.map((item, i) => <CartItem key={i} { ...item }/>)
                }
            </div>
        </div>
    )
}
