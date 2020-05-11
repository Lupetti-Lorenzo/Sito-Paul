import React from 'react'
import { Route } from "react-router-dom"

import Header from "../header/header"
import LandingPage from "../../pages/landingPage/landingPage"
import ProductsPage from "../../pages/productsPage/productsPage"

import "./main.scss"

export default function Main( { menuActive, shoppingActive, toggleShopping, toggleMenu } ) {
    document.body.classList.toggle("noScroll")
    let classe = "notActive"
    if(menuActive) classe = "menuActive"
    else if(shoppingActive) classe = "shoppingActive"

    return (
        <div className={classe} onClick={e => {
            if(menuActive) {
                e.preventDefault()
                toggleMenu()
            }
            else if(shoppingActive) {
                e.preventDefault()
                toggleShopping()
            }
        }}>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/products" component={ProductsPage} />
        </div>
    )
}
