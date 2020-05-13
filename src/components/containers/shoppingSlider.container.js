import { connect } from 'react-redux'
import ShoppingCart from "../shoppingCart/shoppingCart"

const mapStateToProps = state => {
    return {
      active: state.toggleShopping,
      cart: state.cart
    }
  }


const ShoppingSlider = connect(mapStateToProps)(ShoppingCart)

export default ShoppingSlider