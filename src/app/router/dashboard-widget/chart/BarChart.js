/*import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Set-One',
      backgroundColor: 'rgba(24,144,255,0.2)',
      borderColor: 'rgba(24,144,255,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(24,144,255,0.4)',
      hoverBorderColor: 'rgba(24,144,255,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class BarChart extends React.Component {
  render() {
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          height={150}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default BarChart;
*/

import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Set-One',
      backgroundColor: 'rgba(24,144,255,0.2)',
      borderColor: 'rgba(24,144,255,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(24,144,255,0.4)',
      hoverBorderColor: 'rgba(24,144,255,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class LineChart extends React.Component{

  render() {
    return (
      <div>
        <HorizontalBar data={data} height={250} />
      </div>
    );
  }
}

export default LineChart