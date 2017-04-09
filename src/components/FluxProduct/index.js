import React from 'react';
import FluxCartActions from '../../actions/FluxCartActions';

export default class FluxProduct extends React.Component {

  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    };
    FluxCartActions.addToCart(sku, update);
  }

  selectVariant(e) {
    FluxCartActions.selectProduct(e.target.value);
  }

  render() {
    const { selected, cartItems, product } = this.props;
    var ats = (selected.sku in cartItems) ?
      selected.inventory - cartItems[selected].quantity
      : selected.inventory;
    return (
      <div className="flux-product">
        <img src={'assets/' + product.image} alt="will be replaced"/>
        <div className="product-detail">
          <h1 className="name">{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${selected.price}</p>
          <select onChange={this.selectVariant}>
            {
              product.variants.map((variant, index) => {
                return(
                  <option key={index} value={index}>{variant.type}</option>
                );
              })
            }
          </select>
          <button type="button" onClick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    );
  }
}



