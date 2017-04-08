import AppDispatcher from '../dispatcher/AppDispatcher';
import FluxCartConstants from '../constants/FluxCartConstants';

var FluxCartActions = {

  receiveProduct(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    });
  },

  selectProduct(index) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    });
  },

  addToCart(sku, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    });
  },

  removeFromCart(sku) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      sku: sku
    });
  }
};

export default FluxCartActions;