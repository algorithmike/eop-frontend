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
      <div className="header__menu">
        <MenuIcon />
        <img className="logo" alt="EOP logo" src="eop_logo.png"/>
      </div>
      <Search />
      <div className="header__logUser">
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