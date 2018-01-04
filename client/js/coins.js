var React = require('react');
var ReactDOM = require('react-dom');
import Coinlist from './Coindetail';

class Coin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<tbody>
				{
					this.props.coins.map((coin, index) => {
						return <Coinlist coin={coin} key={index}/>
					})
				}	
			</tbody>
		);
	}
};

export default Coin