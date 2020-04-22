import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      colour: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.setColour = this.setColour.bind(this);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value }, this.setColour);
  }

  setColour = () => {
    let colour = '';
    const input = this.state.value.split('');
    for (const val of input) {
      const asc = val.charCodeAt(0);
      const dec = asc.toString(16);
      colour = colour.concat(dec)
    }
    document.body.style.background = "#" + colour;
    console.log(colour);
  }

  render() {
    return (
      <div className="App">
        <div className="app_wrapper">
          <div className="header">
            Welcome to HexaColour
          </div>
          <div className="body">
              Find your colour: &nbsp; 
              <input className="input" value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
