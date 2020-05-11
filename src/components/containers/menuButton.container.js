import { connect } from 'react-redux'
import MenuIcon from "../menuIcon/menuIcon"
import toggleMenu from "../../actions/toggleMenu"

const mapStateToProps = state => {
    return {
      active: state.toggleMenu
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onMenuClick: () => {
        dispatch(toggleMenu())
      }
    }
  }

const MenuButton = connect(mapStateToProps, mapDispatchToProps)(MenuIcon)

export default MenuButton