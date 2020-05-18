
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(item => (item.id === cartItemToAdd.id && item.size === cartItemToAdd.size))
    if(existingCartItem){
        return cartItems.map(cartItem => (
            
            (cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size)
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ))
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}