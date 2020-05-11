import { connect } from 'react-redux'
import ShoppingIcon from "../header/shoppingIcon"
import toggleShopping from "../../actions/toggleShopping"

const mapStateToProps = state => {
    return {
      active: state.toggleShopping
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onShoppingClick: () => {
        dispatch(toggleShopping())
      }
    }
  }

const ShoppingButton = connect(mapStateToProps, mapDispatchToProps)(ShoppingIcon)

export default ShoppingButton