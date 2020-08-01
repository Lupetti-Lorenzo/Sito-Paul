import { connect } from 'react-redux'

import plusMinusButton from "../plusMinusButton/plusMinusButton"

import modifyCartItem from "../../actions/modifyCartItem"
import removeCartItem from "../../actions/removeCartItem"


  
const mapDispatchToProps = dispatch => {
    return {
        modifyCartItem: (item) => {
            dispatch(modifyCartItem(item))
        },
        removeCartItem: (item) => {
            dispatch(removeCartItem(item))
        }
    }
}


const PlusMinusButton = connect(null, mapDispatchToProps)(plusMinusButton)

export default PlusMinusButton