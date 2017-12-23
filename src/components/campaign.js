import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component {
   constructor(props){
      super(props);
      this.state = {
         doughnutData:{
           labels: ['Angry', 'Sad', 'Happy', 'Nervous'],
           datasets:[{
              label:'Customer Emotions',
              data:[2, 1, 5, 3],
              backgroundColor:[
                'red',
                'yellow',
                'green',
                'blue'
              ]
           }]
         }
      }
   }


   render(){
     return(
       <div className="doughnutchart">
       <Doughnut
         data={this.state.doughnutData}
         width={500}
         height={200}
         options={{
          
         maintainAspectRatio: false
        }}
       />
       </div>
     )
   }

}
/*
class RadarChart extends Component {
   constructor(props){
      super(props);
      this.state = {
         radarData:{
           labels: ['Agrresive', 'Loose', 'To the point', 'Nervous'],
           datasets:[{
              label:'Agent Behavior',
              data:[4, 1, 2, 1],
              backgroundColor:[
                'red',
                'blue',
                'green',
                'orange'
              ]
           }]
         }
      }
   }


   render(){
     return(
       <div className="radar">
       <Radar
         data={this.state.radarData}
         width={100}
         height={50}
         options={{
         maintainAspectRatio: false
        }}
       />
       </div>
     )
   }

}
*/
export default DoughnutChart;
