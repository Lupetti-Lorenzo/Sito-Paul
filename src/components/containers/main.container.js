import { connect } from 'react-redux'
import Main from "../main/main"
import toggleMenu from "../../actions/toggleMenu"
import toggleShopping from "../../actions/toggleShopping"

const mapStateToProps = state => {
    return {
      menuActive: state.toggleMenu,
      shoppingActive: state.toggleShopping
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      toggleMenu: () => {
        dispatch(toggleMenu())
      },
      toggleShopping: () => {
        dispatch(toggleShopping())
      }
    }
  }


const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer