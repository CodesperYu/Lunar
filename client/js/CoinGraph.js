import React, {Component} from 'react';
import Chart, {Line} from 'react-chartjs-2';

class CoinGraph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			historicalData: {
				labels: ['', '', '', '', '', '', ''],
				datasets: [
					{
						label: 'BTC',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: 'rgba(75,192,192,1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: 'rgba(75,192,192,1)',
						pointBackgroundColor: '#fff',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(75,192,192,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [430.89, 430.89, 431.06, 430.54, 432.52, 432.53, 452.23]
					}
				]
			}
		}
	}

	render() {
		return (
			<div className={'chart' + this.props.index}>
				<Line data={this.state.historicalData}/>
			</div> 
		)
	}
}

export default CoinGraph;