import React from 'react'
import { withRouter } from "react-router-dom"

import MenuButton from "../containers/menuButton.container"
import ShoppingButton from "../containers/shoppingButton.container"
import "./header.scss"

const Header =  ({ location })  => (
        <header>
            <div className="wrapper">
                <div id="navbar">
                    <div id="menu">
                        <MenuButton />
                    </div>    
                    {location.pathname !== "/" ? (<div id="logo">logo</div>) : ""}
                    <div id="shoppingCart">
                        <ShoppingButton />
                    </div>
                </div>
            </div>
        </header>
)


export default withRouter(Header) 

