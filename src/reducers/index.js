import {combineReducers} from "redux"
import toggleMenu from "./toggleMenu.reducer"
import toggleShopping from "./toggleShopping.reducer"
import setFilters from "./setFilters.reducer"
import cart from "./cart.reducer"

export default combineReducers({
    toggleMenu,
    toggleShopping,
    setFilters,
    cart
})