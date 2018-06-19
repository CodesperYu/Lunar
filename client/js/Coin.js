import React from 'react';


class Coin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<tr className="coinlist__coin">
				{/* {console.log(this.props.coin)} */}
				<td className="coinlist__coindetail">{this.props.coin.symbol}</td>
				<td className="coinlist__coindetail"> ${parseFloat(this.props.coin.price_usd).toFixed(2)}</td>
				<td className = "coinlist__coindetail"> {this.props.coin.price_btc} </td>
				<td className = {
					"coinlist__coindetail " + 
					(this.props.coin.percent_change_24h >= 0 ? 'positive' : 'negative')
				}>
					{this.props.coin.percent_change_24h}%
				</td>
			</tr>
		);
	}
};

export default Coin