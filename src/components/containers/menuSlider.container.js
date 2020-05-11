import { connect } from 'react-redux'
import Menu from "../menuSlider/menu"

const mapStateToProps = state => {
    return {
      active: state.toggleMenu
    }
  }


const MenuSlider = connect(mapStateToProps)(Menu)

export default MenuSlider