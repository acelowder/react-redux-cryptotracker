
import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import icon from '../assets/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo"><Link to="/">CryptoTracker</Link></Typography.Title>
      </div>
    </div>
  );
};

export default Navbar;
