import { MODIFY_CART_ITEM } from "./types"

const modifyCartItem = item => ({
    type: MODIFY_CART_ITEM,
    payload: item
})

export default modifyCartItem