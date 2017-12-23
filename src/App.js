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
    fetch('https://facebook.github.io/react-native/movies.json').then((findresponse)=>{
      this.setState({ Moviedata: findresponse })

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart app demo</h1>
        </header>

         <DoughnutChart />
         if(!this.state.Movidata) return <p> Loading..</p>
         <h2>{this.state.Moviedata.title}</h2>
      </div>
    );
  }
}

export default App;
