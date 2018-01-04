var React = require('react');
var ReactDOM = require('react-dom');

class Coinlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<tr>
				{console.log(this.props.coin)}
				<td>{this.props.coin.symbol}</td>
				<td>{this.props.coin.price_usd}</td>
				<td>{this.props.coin.price_btc}</td>
				<td>{this.props.coin.percent_change_24h}</td>
			</tr>
		);
	}
};

export default Coinlist