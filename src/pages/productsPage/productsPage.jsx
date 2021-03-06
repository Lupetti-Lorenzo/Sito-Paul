import React from 'react'

import "./productsPage.scss"

import ProductsGrid from "../../components/containers/productsGrid.container"
import Newsletter from "../../components/newsletter/newsletter"
import FilterInputs from "../../components/containers/filterInputs.container"

//products page made by filter options, grid of products and newsletter at the bottom
 function ProductsPage() { 
        return (
            <div>
                <div className="wrapper">
                    <div id="products-header">
                        <h2>Products</h2>
                        <FilterInputs />
                    </div>
                    <ProductsGrid />
                </div>
                <Newsletter />
            </div>
        )
    }

export default ProductsPage