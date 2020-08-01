import React from 'react'

import Product from "../product/product"
import SHOP_DATA, { objProducts } from "./shop.data"

import "./products-grid.scss"



class ProductsGrid extends React.Component { 
     
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA,
            products: objProducts,
            prodsDisplayed: 12
        }
    }

        
        //i create a new array and put every item of every collection in it

    render() {
        
        let arrayProducts = this.state.products

        //if a category is selected i filter the array
        if(this.props.filterProducts !== "All") {
            arrayProducts = arrayProducts.filter(product => product.category === this.props.filterProducts)           
        }

        //if a sort option is selected i sort the array
        if(this.props.sortProducts !== "0") {
            this.props.sortProducts === "+" ? 
            arrayProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)) 
            : arrayProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        }
        else {
            //if no sort i reverse the array because when add a new collection it comes last
            arrayProducts.reverse()
        }
        console.log(this.state.prodsDisplayed > arrayProducts.length + " AAAAAAAAÆ")

        return (
            <>
                <div id="products-grid">
                    {           
                        arrayProducts.slice(0, (this.state.prodsDisplayed)).map(({ id, ...itemProps }, index) => (
                            <Product key={ index } { ...itemProps } />
                        )) 
                    }                 
                </div>     
                <button  onClick={()=> this.setState({prodsDisplayed: this.state.prodsDisplayed + 12})} 
                className={this.state.prodsDisplayed > arrayProducts.length ? "d-none" : ""}  
                >More products</button>    
            </>
        )
    }
}

export default ProductsGrid