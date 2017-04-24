import React, { Component } from 'react';
import './App.css';
import FluxCartApp from './components/FluxCartApp';
import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';

import banner_0 from "../images/sale_banners/sale_banner_0.png";
import banner_1 from "../images/sale_banners/sale_banner_1.png";
import banner_2 from "../images/sale_banners/sale_banner_2.png";

class App extends Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
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
            <Nav bsStyle="pills">
              <NavDropdown eventKey="3" title="Browse by Category" id="nav-dropdown-within-tab">
                 <MenuItem eventKey="3.1">Frozen</MenuItem>
                 <MenuItem eventKey="3.2">Fresh</MenuItem>
                 <MenuItem eventKey="3.3">Bakery</MenuItem>
                 <MenuItem eventKey="3.3">Pantry</MenuItem>
               </NavDropdown>
             </Nav>
           </div>
          <div id="ads">
            <img className="ad" src={banner_1}/>
            <img className="ad" src={banner_0}
              alt="img not available"/>
            <img className="ad" src={banner_2}/>
          </div>
          <FluxCartApp/>
        </div>
    );
  }
}

export default App;
