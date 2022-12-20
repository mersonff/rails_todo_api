import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from 'react-router-dom'

import Home from '../pages/Home';

const RoutesIndex: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>} />
      </Switch>
    </Router>
  );
};

export default RoutesIndex;