import React from 'react'



export default function ProductInfos(props) {
    return (
        <div>
            <button onClick={() => props.addCartItem(props)}>Add to cart</button>
        </div>
    )
}
