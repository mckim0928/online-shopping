import React from 'react';
import FluxCartActions from '../../actions/FluxCartActions';
import { Col, Row } from 'react-bootstrap';
import './FluxGrid.css'

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
        <Row className="is-flex">
        {
          products.map((item,index) => {
            return(
              <Col className="grid-column" xs={3} md={2} key={index}>
                <div className="grid-item">
                  <span>
                    <img src={item.image} alt="to be replaced" height="50" width="35"/>
                  </span>
                  <h4 className="name">{item.name}</h4>
                  <p className="price">Price: ${item.variants[0].price}</p>
                  <p className="price">NuVal: {item.variants[0].nuVal}</p>
                  <button className="grid-button" type="button" onClick={() => {this.addToCart(index)}}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            );
          })
        }
        </Row>
      </div>
    );
  }
}
