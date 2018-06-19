var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
import CoinList from './CoinList';
import ListLoading from './ListLoading';
import Navigation from './Navigation';
import NewsSlider from './NewsSlider';
import TopCoinGraph from './TopCoinGraph';

import fake from './fakeData';

import Chart, {Line} from 'react-chartjs-2';



class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(fake);
		this.state = {
			images: [
				'./client/img/bitcoinforks.jpg',
				'./client/img/Ethereum.jpg',
				'./client/img/Litecoin.jpg',
				'./client/img/Neo.jpg'
			],
			topCoins: ['BTC', 'ETH', 'LTC'],
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
		};
	}
	
	refresh() {
		var that = this;
		axios.get('/getCoins')
			.then(function (response) {
				that.setState({
					coins: response.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentDidMount() {
		// var priceClose = fake.map(data => {
		// 	return data.price_close;
		// });
		// this.setState((prevState) => {
		// 	prevState.historicalData.datasets.data = priceClose;
		// 	return {
		// 		historicalData: prevState
		// 	}
		// })
		// console.log(priceClose);
	}
	
	componentWillMount() {
		var that = this;
		axios.get('/getCoins')
			.then(function (response) {
				that.setState({
					coins: response.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
		// console.log(this);
	}

	render() {
		console.log(this.state.fakeData);
		return (
			<div>
				<Navigation />
				<NewsSlider images={this.state.images} />
				{/* <Line data={this.state.historicalData} /> */}
				<TopCoinGraph topCoins={this.state.topCoins}/>
				<div>Total</div>
				<div className="refresh">
					<button onClick={this.refresh.bind(this)}>Refresh</button>
				</div>
				<table className="coinlist">
					<thead className="coinlist__header" align="left">
						<tr>
							<th>Ticker</th>
							<th>Price ($)</th>
							<th>Price (BTC)</th>
							<th>% Change</th>
						</tr>
					</thead>
					{/* {this.coins ? <CoinList coins={this.state.coins} /> : null } */}
					{this.state.coins ? <CoinList coins={this.state.coins} /> :  <ListLoading/>}
				</table>
			</div>
		);
	}
}

// style = {{marginRight: spacing + 'em'}}

ReactDOM.render(<App />, document.getElementById("app"));