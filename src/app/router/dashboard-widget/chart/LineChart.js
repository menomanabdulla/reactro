import React from 'react';
import {Line} from 'react-chartjs-2';



const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(124,132,254,1)');
  gradient.addColorStop(1, 'rgba(149,199,255,.6)');
  return{
    labels: ['JAN', 'MAR', 'MAY', 'JUL','SEP','NOV'],
    datasets:[
      {
        label: 'Stock A',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,.0)',
        borderColor: 'rgba(254, 54, 120,1)',
        borderCapStyle: 'butt',
        borderDash: [5,5],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(254, 54, 120,1)',
        pointBackgroundColor: 'rgba(254, 54, 120,1)',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(254, 54, 120,1)',
        pointHoverBorderColor: 'rgba(254, 54, 120,1)',
        pointHoverBorderWidth: 3,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [65, 59, 90, 50, 56, 90, 100]
      },{
        label: "Stock B",
        fill: true,
        lineTension: 0.1,
        backgroundColor: gradient,
        borderColor: 'rgba(117,102,255.1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(117,102,255.1)',
        pointBackgroundColor: 'rgba(117,102,255.1)',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(117,102,255.1)',
        pointHoverBorderColor: 'rgba(117,102,255.1)',
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