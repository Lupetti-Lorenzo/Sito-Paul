import { connect } from 'react-redux'
import ShoppingCart from "../shoppingCart/shoppingCart"
import toggleShopping from "../../actions/toggleShopping"


const mapStateToProps = state => {
    return {
      active: state.toggleShopping,
      cartItems: state.cart
    }
  }

  const mapDispatchToProps = dispatch => {
    return {      
      toggleShopping: () => {
        dispatch(toggleShopping())
      }
    }
  }


const ShoppingSlider = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingSlider