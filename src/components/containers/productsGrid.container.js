import { connect } from 'react-redux'
import ProductsGrd from "../products-grid/products-grid"

const mapStateToProps = ({setFilters}) => {
    return {
        filterProducts : setFilters.filterProducts,
        sortProducts : setFilters.sortProducts
    }
  }


const ProductsGrid = connect(mapStateToProps)(ProductsGrd)

export default ProductsGrid