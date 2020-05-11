import { TOGGLE_MENU } from "../actions/types"

const toggleMenu = (state = false, action) => {
    if(action.type === TOGGLE_MENU){
        return !state
    }
    else return state
}

export default toggleMenu