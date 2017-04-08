import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import FluxCartConstants from '../constants/FluxCartConstants';

var _products = {};

function add (sku, update) {
  update.quantity = sku in _products ? _products[sku] + 1 : 1;
  _products[sku] = Object.assign({}, _products[sku], update);
}

function removeItem(sku) {
  delete _products[sku];
}

class CartStore extends EventEmitter {

  getCartItems() {
    return _products;
  }

  getCartCount() {
    return Object.keys(_products).length;
  }

  getCartTotal() {
    var total = 0;
    for(var product in _products){
      if(_products.hasOwnProperty(product)){
        total += _products[product].price * _products[product].quantity;
      }
    }
    return total.toFixed(2);
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

}

let cartStoreInstance = new CartStore();

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case FluxCartConstants.CART_ADD:
      add(action.sku, action.update);
      break;

    case FluxCartConstants.CART_REMOVE:
      removeItem(action.sku);
      break;

    default:
      return true;
  }

  cartStoreInstance.emitChange();

  return true;

});

export default cartStoreInstance;