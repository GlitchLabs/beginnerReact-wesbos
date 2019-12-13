import React, { Component } from 'react'
import {formatPrice} from '../helpers'

class Fish extends Component {
    handleOrder = (key) => {
        this.props.addToOrder(this.props.index)
    } 
    render() {
        const {image,name,price,desc,status} = this.props.details;
        const {addToOrder,index} = this.props
        const bool = status === "available"; 
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                {/* <button onClick={() => addToOrder(index)} disabled={!bool}>{bool ? "Add To Order" : "Sold Out!"} </button> */}
                <button onClick={this.handleOrder} disabled={!bool}>{bool ? "Add To Order" : "Sold Out!"} </button>

                
            </li>
        )
    }
}
export default Fish