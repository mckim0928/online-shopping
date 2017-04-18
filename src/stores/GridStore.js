import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import FluxCartConstants from '../constants/FluxCartConstants';

var _products = {}, _selected = null;

function loadProductData(data) {
  _products = data;
  _selected = data[0];
}

function setSelected(index) {
  _selected = _products[index];
}

class GridStore extends EventEmitter {

  getProducts() {
    return _products;
  }

  getSelected() {
    return _selected;
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

let gridStoreInstance = new GridStore();

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  gridStoreInstance.emitChange();
  
  return true;

});

export default gridStoreInstance;