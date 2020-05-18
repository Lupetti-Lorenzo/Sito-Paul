import React, { Component }  from 'react'

import "./productsInfos.scss"

export default class productInfos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: null
        }
    }


    render() {
        const cartProps = {
            id: this.props.id,
            imageUrl: this.props.imageUrl,
            price: this.props.price,
            name: this.props.name,
            size: this.state.size
        }

        return (
            <div>
                <input type="radio" name="size" value="S" onClick={e => {this.setState({size: e.target.value})}}/>
                <label for="S"> S</label><br/>
                <input type="radio" name="size" value="M" onClick={e => {this.setState({size: e.target.value})}}/>
                <label for="M"> M</label><br/>
                <input type="radio" name="size" value="L" onClick={e => {this.setState({size: e.target.value})}}/>
                <label for="L"> L</label><br/>
                <input type="radio" name="size" value="XL" onClick={e => {this.setState({size: e.target.value})}}/>
                <label for="XL"> XL</label><br/>
                <button disabled={this.state.size ? false : true} className={this.state.size ? "" : "disabled"} //fare classe disabled
                onClick={() => {this.props.addCartItem(cartProps); this.props.toggleCart()}}>Add to cart</button>
            </div>
        )
    }
}
