import React, {Component} from 'react';
import './App.css';
import DoughnutChart from './components/campaign.js';
import PiChart from './components/widget.js';
import RadarChart from './components/radar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {Moviedata: []};
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => {
        // Convert to JSON
        return response.json();
      })
      .then(findresponse => {
        // findresponse is an object
        console.log(findresponse);
        this.setState({Moviedata: findresponse});
      });
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={require('./img/Logo.png')} />
          </div>
          <a href="#" className="nav-trigger">
            <span />
          </a>
        </div>

        <div className="side-nav">
          <div className="logo">
            <i className="fa fa-user-circle-o" />
            <span>Albert Moreno</span>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <span>
                    <i>
                      <img src={require('./img/Soundwave.png')} />
                    </i>
                  </span>
                  <span>Call</span>
                </a>
              </li>
            </ul>

            <p>Analytics</p>

            <ul>
              <li>
                <a href="#">
                  <span>
                    <i>
                      <img src={require('./img/Profile.png')} />
                    </i>
                  </span>
                  <span>Accounts</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i>
                      <img src={require('./img/Call.png')} />
                    </i>
                  </span>
                  <span>Campaigns</span>
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <span>
                    <i>
                      <img src={require('./img/People.png')} />
                    </i>
                  </span>
                  <span>Rankings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i>
                      {' '}
                      <img src={require('./img/Idea.png')} />{' '}
                    </i>
                  </span>
                  <span>Insights</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="main-content">
          <div className="title">Analytics</div>
          <div className="main">
            <div className="widget">
              <div className="bigchart" />
              <div className="wrapper">
                <div className="camp-title">Coca Cola Zero Spring Push</div>
                <div className="smbox" />
                <div className="smbox" />
              </div>
              <div className="smwrapper">
                <div className="smh3 smh3Margin">Outcome</div>
                <div className="smchart smchartMargin">
                  <PiChart />
                </div>
              </div>
              <div className="smwrapper">
                <div className="smh3">Customer Emotions</div>
                <div className="smchart" />
              </div>
              <div className="smwrapper smwrapperMargin">
                <div className="smh3">Agent Behavior</div>
                <div className="smchart" />
              </div>
            </div>
            <div className="widget">
              <div className="bigchart" />
              <div className="wrapper">
                <div className="camp-title">Coca Cola Light Campaign</div>
                <div className="smbox" />
                <div className="smbox" />
              </div>
              <div className="smwrapper">
                <div className="smh3 smh3Margin">Outcome</div>
                <div className="smchart smchartMargin">
                  <DoughnutChart />
                </div>
              </div>
              <div className="smwrapper">
                <div className="smh3">Customer Emotions</div>
                <div className="smchart" />
              </div>
              <div className="smwrapper smwrapperMargin">
                <div className="smh3">Agent Behavior</div>
                <div className="smchart">
                  <RadarChart />
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="bigchart" />
              <div className="wrapper">
                <div className="camp-title">Acme Inc</div>
                <div className="smbox" />
                <div className="smbox" />
              </div>
              <div className="smwrapper">
                <div className="smh3 smh3Margin">Outcome</div>
                <div className="smchart smchartMargin" />
              </div>
              <div className="smwrapper">
                <div className="smh3">Customer Emotions</div>
                <div className="smchart" />
              </div>
              <div className="smwrapper smwrapperMargin">
                <div className="smh3">Agent Behavior</div>
                <div className="smchart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
