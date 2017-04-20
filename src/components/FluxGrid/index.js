import React from 'react';
import FluxCartActions from '../../actions/FluxCartActions';
import { Col } from 'react-bootstrap';

export default class FluxGrid extends React.Component {

  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(index) {
    var item = this.props.products[index];
    var current = item.variants[0];
    var sku = current.sku;

    var update = {
      name: item.name,
      type: current.type,
      price: current.price,
      image: current.image
    }

    FluxCartActions.addToCart(sku, update);

  }

  selectProduct() {

  }

  render() {
    const { products } = this.props;
    return(
      <div className="flux-grid">
        {
          products.map((item,index) => {
            return(
              <Col md={2} key={index}>
                <span>
                  <img src={item.image} alt="to be replaced" height="42" width="42"/>
                </span>
                <h1 className="name">{item.name}</h1>
                <p className="description">{item.description}</p>
                <p className="price">Price: ${item.variants[0].price}</p>
                <p className="price">NuVal: {item.variants[0].nuVal}</p>
                <button className="grid-button" type="button" onClick={() => {this.addToCart(index)}}>
                  Add to Cart
                </button>
              </Col>
            );
          })
        }
      </div>
    );
  }
}