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
<<<<<<< HEAD
        <a href="#">About</a>
        <a href="#">Sales</a>
=======
        <Link to="/" onClick={() => {this.props.toggleMenu()}}>Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Sales</Link>
>>>>>>> 421757b6952660d5ec3ccff3448ae004b67dba17
        <Link to="/products" onClick={() => this.props.toggleMenu()}>Products</Link>
        <div className={this.state.productsOpen ? "active" : ""} id="categories">
        <p  
        className = {this.state.productsOpen ? "selected" : ""}
        onClick={() => {
          this.setState({productsOpen: !this.state.productsOpen})
        }}>Categories {this.state.productsOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</p>
          <div className="products-links">
            {
              categories.map((cat, i) => (
                <Link to="/products" key={i} >
                  <li 
                    className={this.props.filterProducts === cat ? "selected" : ""} 
                    onClick={() => {this.props.onCatClick(cat); this.props.toggleMenu()}}>{cat}
                  </li>
                </Link>
              ))
            }
          </div>
        </div>
        
      </div>
    )
  }
}
