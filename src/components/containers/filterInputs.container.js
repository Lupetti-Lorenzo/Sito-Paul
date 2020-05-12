import { connect } from 'react-redux'
import Filters from "../filterInputs/filterInputs"
import setSorting from "../../actions/setSorting"
import setFilter from "../../actions/setFilters"


const mapStateToProps = ({setFilters, toggleMenu, toggleShopping}) => {
    return {
        filterProducts: setFilters.filterProducts,
        sortProducts: setFilters.sortProducts,
        active: toggleMenu || toggleShopping
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        changeFilter: (value) => {
        dispatch(setFilter(value))
      },
      changeSort: (value) => {
        dispatch(setSorting(value))
      }
    }
  }

const FilterInputs = connect(mapStateToProps, mapDispatchToProps)(Filters)

export default FilterInputs