import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/App.scss';
import About from './About';
import Header from './Header';
import Help from './Help';
import PageNotFound from './PageNotFound';
import Results from './Results';
import Search from './Search';
import Upload from './Upload';


class App extends Component {
  render(){return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact={true}><Search/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/help"><Help/></Route>
          <Route path="/results"><Results/></Route>
          <Route path ="/upload"><Upload/></Route>
          <Route><PageNotFound/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );}
};

export default App;