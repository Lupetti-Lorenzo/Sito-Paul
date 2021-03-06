import React from 'react'
import { Route } from "react-router-dom"

import Header from "../header/header"
import LandingPage from "../../pages/landingPage/landingPage"
import ProductsPage from "../../pages/productsPage/productsPage"
import ProductInfos from "../containers/productInfos.container"

import { objProducts } from "../products-grid/shop.data"

import "./main.scss"

export default function Main( { menuActive, shoppingActive, toggleShopping, toggleMenu } ) {
    //toggle page not scrolling
    document.body.classList.toggle("noScroll")
    let classe = "notActive"
    if(menuActive) classe = "menuActive"
    else if(shoppingActive) classe = "shoppingActive"

    return (
        <div className={classe} onClick={e => {
            //control if the menu or the shopping cart is active and if toggle them
            if(menuActive) {
                e.preventDefault()
                toggleMenu()
            }
            else if(shoppingActive) { 
                e.preventDefault()              
                toggleShopping()
            }
        }}>
            {/*   Routes  */}
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/products" component={ProductsPage} />
            {/*   Routes for every product   */}
            {
                objProducts.map((product, i) => {
                    return (
                        <Route key={i}  path={"/products/" + product.name}>
                            <ProductInfos {...product}/>
                        </Route>
                    )
                })
            }
            {/*page not found  <Route path="/" component={} /> */}
        </div>
    )
}
