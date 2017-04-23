import React, { Component } from 'react';
import './App.css';
import FluxCartApp from './components/FluxCartApp';

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
                  <li><a href="./produce.html">Produce</a></li>
                  <li><a href="./frozen.html">Frozen</a></li>
                </ul>
                </li>
            </ul>
          </div>

          <div id="ads">
            <img className="ad" src="~/images/sale_banners/sale_banner_0.png"
              alt="img not available"/>
            <img className="ad" src="../images/sale_banners/sale_banner_1.png"/>
            <img className="ad" src="../images/sale_banners/sale_banner_2.png"/>
          </div>
          <FluxCartApp/>
        </div>
    );
  }
}

export default App;
