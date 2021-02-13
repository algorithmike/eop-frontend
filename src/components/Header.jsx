import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { unSetMe } from '../store/slices/me'

const Header = (props) => {
  const logout = () => {
    localStorage.removeItem('eop_auth')
    props.unSetMe()
  }
  return (
    <header>
      <h1>Eop</h1>
      <div>
        {
          props.me.token 
          ? <Button onClick={logout}>Logout</Button>
          : <Link to="/login">
            <Button>Login</Button>
          </Link>
        }
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
        <Link to="/upload">
          <Button>Test Upload</Button>
        </Link>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => ({
  me: state.me
})

const mapDispatchToProps = (dispatch) => ({
  unSetMe: (me) => (dispatch(unSetMe(me)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header); 