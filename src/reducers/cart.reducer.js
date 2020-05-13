import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../actions/types"
import { addItemToCart } from "../components/shoppingCart/cart.utils"

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return addItemToCart(state, action.payload)    
                            
        default:
            return state
    }
}

export default cartReducer