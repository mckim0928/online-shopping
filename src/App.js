import React, { Component } from 'react';
import './App.css';
import FluxCartApp from './components/FluxCartApp';

import banner_0 from "../images/sale_banners/sale_banner_0.png";
import banner_1 from "../images/sale_banners/sale_banner_1.png";
import banner_2 from "../images/sale_banners/sale_banner_2.png";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="header">
            <div className="row">
              <h1>Experimental Shopping</h1>
            </div>
          </div>

          <div id="navigation">
            <ul className="nav nav-pills">
                <li role="presentation" className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    All Departments <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="../produce.html">Produce</a></li>
                  <li><a href="./frozen.html">Frozen</a></li>
                </ul>
                </li>
            </ul>
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
