var React = require('react');
var ReactDOM = require('react-dom');
import Coin from './Coin';

class CoinList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<tbody className="coinlist__body">
				{
					this.props.coins.map((coin, index) => {
						return <Coin coin={coin} key={index}/>
					})
				}	
			</tbody>
		);
	}
};

export default CoinList