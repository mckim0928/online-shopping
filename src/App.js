import React, { Component } from 'react';
import './App.css';
import FluxCartApp from './components/FluxCartApp';
import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';

import banner_0 from "../images/sale_banners/sale_banner_0.png";
import banner_1 from "../images/sale_banners/sale_banner_1.png";
import banner_2 from "../images/sale_banners/sale_banner_2.png";

class App extends Component {
  constructor() {
   super();
   this.state = {
     category: "all"
   };

   this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(eventKey) {
    event.preventDefault();
    this.setState({
      category: eventKey
    });
  }

  render() {
    return (
        <div className="App">
          <div className="header">
            <div className="row">
              <h1>Experimental Shopping</h1>
            </div>
          </div>
          <div id="navigation">
            <Nav bsStyle="pills" onSelect={this._handleSelect}>
              <NavDropdown eventKey="3" title="Browse by Category" id="nav-dropdown-within-tab">
                <MenuItem eventKey="all">All Items</MenuItem>
                <MenuItem eventKey="Beverages">Beverages</MenuItem>
                 <MenuItem eventKey="Frozen">Frozen</MenuItem>
                 <MenuItem eventKey="Produce">Produce</MenuItem>
                 <MenuItem eventKey="Snack Foods">Snack Foods</MenuItem>
                 <MenuItem eventKey="Breakfast Foods">Breakfast Foods</MenuItem>
                 <MenuItem eventKey="Fresh">Fresh</MenuItem>
                 <MenuItem eventKey="Bakery">Bakery</MenuItem>
                 <MenuItem eventKey="Pantry">Pantry</MenuItem>
               </NavDropdown>
             </Nav>
           </div>
          <div id="ads">
            <img className="ad" src={banner_1}/>
            <img className="ad" src={banner_0}
              alt="img not available"/>
            <img className="ad" src={banner_2}/>
          </div>
          <FluxCartApp category={this.state.category}/>
        </div>
    );
  }
}

export default App;
