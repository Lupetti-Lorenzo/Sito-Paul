import { ADD_CART_ITEM, REMOVE_CART_ITEM, MODIFY_CART_ITEM } from "../actions/types"

const cartReducer = (state = [], action) => {
    const cartItem = action.payload

    switch (action.type) {
        case ADD_CART_ITEM:
            //if exists the item i increase the quantity, if not return the state plus the item
            const existingCartItems = state.find(item => (item.id === cartItem.id && item.size === cartItem.size))
            if(existingCartItems){
                return state.map(item => (
                    (item.id === cartItem.id && item.size === cartItem.size)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ))
            }
            return [...state, {...cartItem, quantity: 1}]
            
        case MODIFY_CART_ITEM:
            //add or remove one quantity from the item
            return state.map(item => (
                (item.id === cartItem.id && item.size === cartItem.size)
                ? { ...item, quantity: item.quantity + (cartItem.operator === "+" ? 1 : -1) }
                : item
            ))
            
        case REMOVE_CART_ITEM:
            //remove completely the item from the cart
            return state.filter(item => !(item.id === cartItem.id && item.size === cartItem.size))

        default:
            return state  
}
}
export default cartReducer