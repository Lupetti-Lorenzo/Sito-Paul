import React from 'react'

export default function ProductInfos(props) {
    const cartProps = {
        id: props.id,
        imageUrl: props.imageUrl,
        price: props.price,
        name: props.name
    }
    return (
        <div>
            <button onClick={() => {props.addCartItem(cartProps); props.toggleCart()}}>Add to cart</button>
        </div>
    )
}
