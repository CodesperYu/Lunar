import React, {Component} from 'react';
import CoinGraph from './CoinGraph'

class TopCoinGraph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		console.log(this.props);
		return (
			<div className='graph-container'>
				{
					this.props.topCoins.map((coin, index) => {
					return <CoinGraph coin={coin} index={index} key={index}/>
					})
				}
			</div>
		)
	}
}

export default TopCoinGraph;