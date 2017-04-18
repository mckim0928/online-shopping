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



}