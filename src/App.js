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
    return [
    <div className="header">
       /* callER logo  */
			 <div className="logo">
				<img src="images/Logo.png" alt="callER" />
			 </div>
			 <a href="#" className="nav-trigger"><span></span></a>
		 </div>
    /* side nav bar */
		<div className="side-nav">
       	  <div className="logo">
				     <i className="fa fa-user-circle-o"></i>
				     <span>Albert Moreno</span>
			    </div>
  			<nav>
        /* Call list item in side bar*/
				<ul>
					 <li>
					    <a href="#">
							<span ><i className="fa fa-volume-control-phone"></i></span>
							<span>Call</span>
						</a>

				  </li>
        </ul> /* end of Call list item in side bar*/

				       <p >Analytics</p>    /* Title  */
          /* list items in side bar */
				 <ul>
					 <li>
					   <a href="#">
				        <span><i className="fa fa-user iconSize"></i></span>
				        <span>Accounts</span>
				      </a>
					</li>
					 <li>
						 <a href="#">

							 <span><i className="fa fa-volume-control-phone iconSize"></i></span>
							 <span>Campaigns</span>
						 </a>
					</li>
					<li className="active">
						 <a href="#">
							  <span><i className="fa fa-users iconSize"></i></span>
							  <span>Rankings</span>
					  	</a>
					</li>
					<li>
					 	<a href="#">
						  	<span><i className="fa fa-lightbulb-o iconSize"></i></span>
							  <span>Insights</span>
						 </a>
					</li>
				</ul> /* end of list items in side bar*/

			</nav>
		</div>  /* end of side nav bar */

    /*  main content  div */
		<div className="main-content">
			  <div className="title">
				  Analytics
			  </div>
         /* main div  */
			<div className="main">
          /*   first widget */
			  <div className="widget">
			    	<div className="bigchart"></div>
				    <div className="wrapper">
					      <div className="camp-title">Coca Cola Zero Spring Push</div>
                     <div className="smbox"></div>
                     <div className="smbox"></div>
					   </div>
					  <div className="smwrapper">
                     <div className="smh3 smh3Margin">Outcome</div>
					           <div className="smchart smchartMargin"></div>
					  </div>
					  <div className="smwrapper">
                     <div className="smh3">Customer Emotions</div>
					    <div className="smchart"></div>
					  </div>
					<div className="smwrapper smwrapperMargin">
                     <div className="smh3">Agent Behavior</div>
					    <div className="smchart"></div>
					</div>
				</div>    /* end of first widget */

               /*   second widget */
        <div className="widget">
				    <div className="bigchart"></div>
				    <div className="wrapper">
					      <div className="camp-title">Coca Cola Light Campaign</div>
                     <div className="smbox"></div>
                     <div className="smbox"></div>
					  </div>
					  <div className="smwrapper">
                    <div className="smh3 smh3Margin">Outcome</div>
					          <div className="smchart smchartMargin"></div>
					  </div>
					  <div className="smwrapper">
                    <div className="smh3">Customer Emotions</div>
					          <div className="smchart"></div>
					  </div>
					  <div className="smwrapper smwrapperMargin">
                    <div className="smh3">Agent Behavior</div>
					          <div className="smchart"></div>
					  </div>
				</div>   /* end of second widget */

              /*  third widget */
       <div className="widget">
			    	<div className="bigchart"></div>
				    <div className="wrapper">
					      <div className="camp-title">Acme Inc</div>
                    <div className="smbox"></div>
                    <div className="smbox"></div>
					    </div>
					    <div className="smwrapper">
                   <div className="smh3 smh3Margin">Outcome</div>
					         <div className="smchart smchartMargin"></div>
					   </div>
					    <div className="smwrapper">
                    <div className="smh3">Customer Emotions</div>
					          <div className="smchart"></div>
					   </div>
					   <div className="smwrapper smwrapperMargin">
                    <div className="smh3">Agent Behavior</div>
					          <div className="smchart"></div>
					   </div>
				</div>  /* end of third widget */

			</div>  /* end of main div */
		</div>  /* end of main content  */
  ];
  }
}

export default App;
