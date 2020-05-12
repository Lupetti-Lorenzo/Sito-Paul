import { connect } from 'react-redux'
import Menu from "../menuSlider/menu"
import setFilter from "../../actions/setFilters"
import toggleMenu from "../../actions/toggleMenu"


const mapStateToProps = state => {
    return {
      active: state.toggleMenu,
      filterProducts: state.setFilters.filterProducts
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onCatClick: (filter) => {
        dispatch(setFilter(filter))
      },
      toggleMenu: () => {
        dispatch(toggleMenu())
      }
    }
  }


const MenuSlider = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuSlider