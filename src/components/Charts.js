import "../App.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Charts(props) {
  var _ = require('lodash');


  const trainingsSumData = _(props.trainings)
  .groupBy('activity')
  .map((activity, id) => ({
    activity: id,
    duration: _.sumBy(activity, 'duration')
  }))
  .value()

console.log(trainingsSumData);
  
  return (
    <div>
    <BarChart
      width={1000}
      height={600}
      data={trainingsSumData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={70}
    >
      <XAxis dataKey='activity' scale="point" padding={{ left: 50, right: 50 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="duration" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
    </div>
  );
}
