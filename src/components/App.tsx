import { Button, Dialog, DialogTitle } from '@material-ui/core';
import { Component } from 'react';
import '../styles/App.scss';

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
}

export default App;
