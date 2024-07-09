import React from 'react';

import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <div className="footer">
      </div>
    </div>
  </div>
);

export default App;