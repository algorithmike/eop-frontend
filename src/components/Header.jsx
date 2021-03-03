import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import '../styles/Header.scss';
import { unSetMe } from '../store/slices/me';
import Search from './Search';

const Header = (props) => {
  const logout = () => {
    localStorage.removeItem('eop_auth')
    props.unSetMe()
  }
  return (
    <div className="header">
      <div className="menu">
        <MenuIcon />
        <img alt="EOP logo" src="eop_logo.png"/>
        {/* <Link to="/about">
          <Button>About</Button>
        </Link>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/Help">
          <Button>Home</Button>
        </Link>
        <Link to="/">
          <Button>Test Results Page</Button>
        </Link>
        <Link to="/test">
          <Button>Test 404 Page</Button>
        </Link>
        <Link to="/upload">
          <Button>Test Upload</Button>
        </Link> */}
      </div>
      <div className="searchFilters">
        <Search />
      </div>
      <div className="logUser">
        {
            props.me.token 
            ? <Button onClick={logout}>Logout</Button>
            : <Link to="/login">
              <Button>Login</Button>
            </Link>
          }
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  me: state.me
})

const mapDispatchToProps = (dispatch) => ({
  unSetMe: (me) => (dispatch(unSetMe(me)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header); 