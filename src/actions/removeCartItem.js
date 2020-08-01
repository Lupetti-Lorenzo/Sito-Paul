import { REMOVE_CART_ITEM } from "./types"

const removeCartItem = item => ({
    type: REMOVE_CART_ITEM,
    payload: item
})

export default removeCartItem