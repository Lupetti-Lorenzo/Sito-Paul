import React, { Component } from 'react'

import "./productsPage.scss"

import ProductsGrid from "../../components/products-grid/products-grid"
import Newsletter from "../../components/newsletter/newsletter"

const categories = ["All", "Hoodie", "Tees", "Jeans"]

 class ProductsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sortProducts: null,
            filterProducts: "All"
        }
    }



    render() {
        return (
            <div>
                <div className="wrapper">
                    <div id="products-header">
                        <h2>Products</h2>
                        <div id="products-nav">
                            {
                                categories.map((cat, i) => (
                                    <span key={i} 
                                    className={this.state.filterProducts === cat ? "selected" : ""} 
                                    onClick={e => this.setState({filterProducts: cat})}>{cat}  {i+1 !== categories.length ? " /" : ""}
                                    </span>
                                ))
                            }
                        </div>
                        Sort by: 
                        <select onChange={e => this.setState({sortProducts: e.target.value})}>
                            <option value="0">Latest</option>
                            <option value="-">Price: low to high</option>
                            <option value="+">Price: high to low</option>
                        </select>
                    </div>
                    <ProductsGrid sortBy={this.state.sortProducts} filterBy={this.state.filterProducts}/>
                </div>
                <Newsletter />
            </div>
        )
    }
}

export default ProductsPage