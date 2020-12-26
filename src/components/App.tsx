import { Button, Dialog, DialogTitle } from '@material-ui/core';
import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const PageNotFound = (
  <div>
    <p>404 - This Page Wasn't Found</p>
  </div>
);

const Help = (
  <div>
    <p>This is the Help page.</p>
  </div>
);

const About = (
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
  constructor(props: {} | Readonly<{}>){
    super(props)
  }

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
    <div>This is the Header component.</div>
  </header>
);

const Router = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Search}/>
        <Route path="/about" component={About}/>
        <Route path="/help" component={Help}/>
        <Route path="/results" component={Results}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

class App extends Component {
  
  state = {
    showDialog: false
  }

  render(){return (
    <div className="App">
      <p>Hello World!</p>
      <Button onClick={() => {
        this.setState(() => {
          console.log();
          return {showDialog: !this.state.showDialog}
        })
      }}>Test</Button>
      <Dialog open={this.state.showDialog}>
        <DialogTitle>This is a test.</DialogTitle>
      </Dialog>
    </div>
  );}
};

export default App;
