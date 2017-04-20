import React from 'react';
import FluxCartActions from '../../actions/FluxCartActions';

export default class FluxCart extends React.Component {

  removeFromCart = (sku) => {
    FluxCartActions.removeFromCart(sku);
  }

  render() {
    const { products, total } = this.props;
    return (
      <div className="flux-cart">
        <div className="mini-cart">
          <ul>
            {
              Object.keys(products).map(product => {
                return (
                  <li key={product}>
                    <h1 className="name">{products[product].name}</h1>
                    <p className="type">{products[product].type} x {products[product].quantity}</p>
                    <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                    <img className="item-image" src={products[product].image} alt="will be replaced"/>
                    <button type="button" className="remove-item" onClick={this.removeFromCart.bind(this, product)}>X</button>
                  </li>
                );
              })
            }
          </ul>
          <span className="total">Total: ${total}</span>
        </div>
      </div>
    );
  }
}