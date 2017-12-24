import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DoughnutChart from './components/campaign.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state={ Moviedata:[] };

   }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json').then(response => {
	     // Convert to JSON
	     return response.json();
     }).then(findresponse => {
	     // findresponse is an object
	     console.log(findresponse);
     this.setState({ Moviedata: findresponse });
  });


}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart app demo</h1>
        </header>

         <DoughnutChart />

         <h2>{this.state.Moviedata.title}</h2>
      </div>
    );
  }
}

export default App;
