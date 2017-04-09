import React from 'react';
import CartStore from '../../stores/CartStore';
import ProductStore from '../../stores/ProductStore';
import FluxProduct from '../FluxProduct';
import FluxCart from '../FluxCart';

function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
  };
}

export default class FluxCartApp extends React.Component {
  constructor() {
    super();
    this.state = getCartState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getCartState());
  }

  render() {
    const {cartItems, cartCount, cartTotal, product, selectedProduct} = this.state;
    return (
      <div className="flux-cart-app">
        <FluxCart
          products={cartItems}
          count={cartCount}
          total={cartTotal} />
        <FluxProduct
          product={product}
          cartItems={cartItems}
          selected={selectedProduct} />
      </div>
    );
  }


}