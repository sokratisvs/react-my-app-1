import React, {Component} from 'react';
import { RadarChart } from 'recharts';

const {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis} = Recharts;

const data = [
    { subject: 'Math', Positive: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const TwoLevelPieChart = React.createClass({
	render () {
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    );
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
export default TwoLevelPieChart;
