import React from 'react'

export default function ShoppingIcon({active, onShoppingClick}) {
    return (
        <span><i className="fas fa-shopping-cart" onClick={() => {if(!active) onShoppingClick()}}></i></span>
    )
}