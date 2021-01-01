import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Eop</h1>
    <div>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/Help">
        <Button>Home</Button>
      </Link>
      <Link to="/results">
        <Button>Test Results Page</Button>
      </Link>
      <Link to="/test">
        <Button>Test 404 Page</Button>
      </Link>
    </div>
  </header>
);

export default Header;