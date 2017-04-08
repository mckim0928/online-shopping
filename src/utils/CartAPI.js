import FluxCartActions from '../actions/FluxCartActions';

export default {

  getProductData() {
    var data = JSON.parse(localStorage.getItem('products'));
    FluxCartActions.receiveProduct(data);
  }
  
};