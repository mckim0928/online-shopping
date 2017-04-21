import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import FluxCartConstants from '../constants/FluxCartConstants';
import $ from 'jquery'

var _product = {}, _selected = null;

function loadProductData(data) {
  $.getJSON("https://spreadsheets.google.com/feeds/list/1vv4lmE0JZztBobVsbbKkiBo8MjyaSORXnqR9zKnXteU/od6/public/values?alt=json",
    function(data){
      // _product = data.feed.entry[0];
      const str = data.feed.entry[0].content['$t'];
      console.log(str);
  //console.log(data.feed.entry[0]['gsx$title']['$t']);
})

  _product = data[0];
  _selected = data[0].variants[0];
}

function setSelected(index) {
  _selected = _product.variants[index];
}

class ProductStore extends EventEmitter {

  getProduct() {
    return _product;
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

let productStoreInstance = new ProductStore();

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

  productStoreInstance.emitChange();

  return true;

});

export default productStoreInstance;