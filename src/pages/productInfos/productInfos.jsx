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
            imageUrl: this.props.images.front,
            price: this.props.price,
            name: this.props.name,
            size: this.state.size
        }

        const sizes = ['S', 'M', 'L', 'XL']

        return (
            <div>
                {
                    sizes.map((size, i) => {
                        const notDispo = this.props.disponibility[size] <= 0
                        return (
                            <div className='radioSize' key={i}>
                                <input type="radio" name="size"
                                onClick={e => {this.setState({size})}}
                                disabled={notDispo ? true : false}
                                className={notDispo ? 'notDispo' : 'dispo'}
                                />
                                <label htmlFor={size}>{size}{notDispo ? "  out of stock": ''}</label><br/>
                            </div>
                        ) 
                  })
                }
                <button disabled={this.state.size ? false : true} className={this.state.size ? "" : "disabled"} //fare classe disabled
                onClick={() => {this.props.addCartItem(cartProps); this.props.toggleCart()}}>Add to cart</button>

                <div className='img-grid'>
                    <img src={this.props.images.front} alt="Front"/>
                    <img src={this.props.images.back} alt="Back"/>
                    <img src={this.props.images[`${this.state.size ? this.state.size : "S"}front`]} alt="Front Size"/>
                    <img src={this.props.images[`${this.state.size ? this.state.size : "S"}back`]} alt="Back Size"/>
                </div>
            </div>
        )
    }
}
