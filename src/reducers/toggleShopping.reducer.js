import { TOGGLE_SHOPPING } from "../actions/types"

const toggleShopping = (state = false, action) => {
    if(action.type === TOGGLE_SHOPPING){
        return !state
    }
    else return state
}

export default toggleShopping