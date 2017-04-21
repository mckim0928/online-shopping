import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Grid from './components/FluxGrid';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/instant" component={Grid}/>
    </div>
  </Router>
);

export default Routes;