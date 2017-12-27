import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';

class RadarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radarData: {
        /*  labels: ['Success'], */
        datasets: [
          {
            label: 'Customer Emotions',
            data: [23, 77],
            backgroundColor: ['red', '#F0F5F7']
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="radarchart">
        <Radar
          data={this.state.radarData}
          width={450}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default RadarChart;

