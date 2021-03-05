import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.scss';
import About from './About';
import Header from './Header';
import Help from './Help';
import Login from './Login';
import MenuColumn from './MenuColumn';
import PageNotFound from './PageNotFound';
import Results from './Results';
import CreateContent from './CreateContent';


class App extends Component {
  render(){return (
    <div className="app">
      <Header/>
      <div className="app__main" >
        <MenuColumn />
        <Switch>
          <Route path="/" exact={true}><Results/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/help"><Help/></Route>
          <Route path="/login"><Login/></Route>
          <Route path ="/upload"><CreateContent/></Route>
          <Route><PageNotFound/></Route>
        </Switch>
      </div>
    </div>
  );}
};

export default App;