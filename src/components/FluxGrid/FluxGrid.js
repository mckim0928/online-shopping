import React from 'react';
import FluxCartActions from '../../actions/FluxCartActions';
import { Col, Row } from 'react-bootstrap';
import './FluxGrid.css'

export default class FluxGrid extends React.Component {

  constructor(props) {
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
      image: current.image,
      nuVal: current.nuVal,
    }

    FluxCartActions.addToCart(sku, update);

  }

  selectProduct() {

  }

  render() {
    const { products } = this.props;
    return(
      <div className="flux-grid container-fluid">
        <Row className="is-flex grid-row">
        {
          products.map((item,index) => {
            if (this.props.category == item.maincategory ||
              this.props.category == "all") {

              return(
                <Col className="grid-column" xs={6} sm={4} md={3} lg={2}>
                  <div className="grid-item">
                    <span>
                      <img src={item.image} alt="to be replaced" height="50" />
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
            }
          })
        }
        </Row>
      </div>
    );
  }
}
