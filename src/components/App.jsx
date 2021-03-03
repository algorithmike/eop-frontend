import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/App.scss';
import About from './About';
import Header from './Header';
import Help from './Help';
import Login from './Login';
import PageNotFound from './PageNotFound';
import Results from './Results';
import CreateContent from './CreateContent';


class App extends Component {
  render(){return (
    <BrowserRouter>
      <div>
        <Header/>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <Switch>
          <Route path="/" exact={true}><Results/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/help"><Help/></Route>
          <Route path="/login"><Login/></Route>
          <Route path ="/upload"><CreateContent/></Route>
          <Route><PageNotFound/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );}
};

export default App;