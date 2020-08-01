import React from 'react'

import "./plusMinusButton.scss"



export default function PlusMinusButton({ id, size, operator, quantity,  modifyCartItem, removeCartItem }) {
    return (
        <button
        //if the operator is - and the quantity is 1 the item is removed from the cart
        onClick={() => ((operator === "-" && quantity === 1) ? removeCartItem({ id, size }) : modifyCartItem({ id, size, operator }))} 
        className="colorwhite" >{operator === "+" ? "+" : "-"}</button>
    )
}
