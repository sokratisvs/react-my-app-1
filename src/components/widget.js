import React, {Component} from 'react';
import {PieChart, Pie, Legend} from 'recharts';

/* const {PieChart, Pie, Legend} = Recharts; */

const data02 = [{name: 'Outcome', value: 23}];

const PiChart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie dataKey="value" data={data02} cx={80} cy={100} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
    </PieChart>
  );
};

export default PiChart;
