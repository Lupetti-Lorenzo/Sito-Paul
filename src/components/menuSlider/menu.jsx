import React from 'react'
import { Link } from "react-router-dom"

import "./menu.scss"
import { categories } from "../filterInputs/filterInputs"

export default class Menu extends React.Component{

    constructor(props) {
      super(props)
      this.state ={
        productsOpen: false 
      }
    }

    render() {
      return (
        <div id="sidenav" className={ this.props.active ? "open" : ""}>
        <a href="#">About</a>
        <a href="#">Sales</a>
        <Link to="/products" onClick={() => this.props.toggleMenu()}>Products</Link>
        <div className={this.state.productsOpen ? "active" : ""}>
        <p  
        className = {this.state.productsOpen ? "selected" : ""}
        onClick={() => {
          this.setState({productsOpen: !this.state.productsOpen})
        }}>Categories</p>
          <div className="products-links">
            {
              categories.map((cat, i) => (
                <Link to="/products" key={i} >
                  <p 
                    className={this.props.filterProducts === cat ? "selected" : ""} 
                    onClick={() => {this.props.onCatClick(cat); this.props.toggleMenu()}}>{cat}
                  </p>
                </Link>
              ))
            }
          </div>
        </div>
        
      </div>
    )
  }
}
