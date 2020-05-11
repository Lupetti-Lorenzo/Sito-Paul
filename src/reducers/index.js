import {combineReducers} from "redux"
import toggleMenu from "./toggleMenu.reducer"
import toggleShopping from "./toggleShopping.reducer"

export default combineReducers({
    toggleMenu,
    toggleShopping
})