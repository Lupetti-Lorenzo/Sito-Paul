import { connect } from 'react-redux'

import productInfos from "../productInfos/productInfos"

import addItem from "../../actions/addCartItem"
import toggleShopping from "../../actions/toggleShopping"

  
const mapDispatchToProps = dispatch => {
    return {
        addCartItem: (item) => {
            dispatch(addItem(item))
        },
        toggleCart: () => {
            dispatch(toggleShopping())
        }
    }
}


const ProductInfos = connect(null, mapDispatchToProps)(productInfos)

export default ProductInfos