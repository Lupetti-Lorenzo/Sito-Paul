import { connect } from 'react-redux'
import productInfos from "../productInfos/productInfos"
import addItem from "../../actions/addCartItem"

  
const mapDispatchToProps = dispatch => {
    return {
        addCartItem: (item) => {
            dispatch(addItem(item))
        }
    }
}


const ProductInfos = connect(null, mapDispatchToProps)(productInfos)

export default ProductInfos