import { ADD_CART_ITEM } from "./types"

const addCartItem = item => ({
    type: ADD_CART_ITEM,
    payload: item
})

export default addCartItem