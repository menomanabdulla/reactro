import React from 'react';
import {Line} from 'react-chartjs-2';

const data = (canvas) => {
  return{
    labels: ['JAN', 'MAR', 'MAY', 'JUL','SEP','NOV'],
    datasets:[
      {
        label: 'Stock A',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(28,221,239,.6)',
        borderColor: 'rgba(28,239,239,1)',
        borderCapStyle: 'butt',
        borderDash: [0,0],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(28,239,239,1)',
        pointBackgroundColor: 'rgba(28,239,239,1)',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(28,239,239,1)',
        pointHoverBorderColor: 'rgba(28,239,239,1)',
        pointHoverBorderWidth: 3,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [65, 59, 90, 50, 56, 90, 100]
      },{
        label: "Stock B",
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(24,144,255,0.6)',
        borderColor: 'rgba(24,144,255,0.8)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(24,144,255,0.6)',
        pointBackgroundColor: 'rgba(24,144,255,0.6)',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(24,144,255,0.6)',
        pointHoverBorderColor: 'rgba(24,144,255,0.6)',
        pointHoverBorderWidth: 3,
        pointRadius: 4,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: false
        data: [80, 50, 60, 80, 64, 78, 85,70,40,70,75],
        spanGaps: false,
      }
    ]
  }
};
const options={
  legend: {
      display: false,
  },
};
class LineChart extends React.Component{
  render() {
    return (
      <div>
        <Line data={data} options={options} height={250}/>
      </div>
    );
  }
};

export default LineChart