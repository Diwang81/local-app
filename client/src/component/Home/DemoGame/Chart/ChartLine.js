import React, { Component } from '../../../../../node_modules/react'
import { Line } from '../../../../../node_modules/react-chartjs-2';

export class ChartLine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: //props.chartDatathis.setState
      {
        labels: [
          'Boston',
          'Worcester',
          'Springfield',
          'Lowell'
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              181045,
              153060,
              106519
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    // displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            // title: {
            // display: this.props.displayTitle,
            // text: 'Largest Cities in Massachusetts',
            // fontSize: 25
            // },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default ChartLine;