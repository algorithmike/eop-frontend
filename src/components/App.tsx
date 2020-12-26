import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <p>404 - This Page Wasn't Found</p>
  </div>
);

const Help = () => (
  <div>
    <p>This is the Help page.</p>
  </div>
);

const About = () => (
  <div>
    <p>This is the About page.</p>
  </div>
);

const Search = () => {
  return (
    <div>
      <p>This is the Search page.</p>
    </div>
  )
};

class Results extends Component {
  render(){
    return (
      <div>
        <p>This is the page with search Results.</p>
      </div>
    )
  }
};

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

class App extends Component {
  state = {
    loggedIn: false
  }

  render(){return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact={true}><Search/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/help"><Help/></Route>
          <Route path="/results"><Results/></Route>
          <Route><PageNotFound/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );}
};

export default App;
