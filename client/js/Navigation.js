
import React, {Components} from 'react';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="navigation"> 
				<h3 className="navigation__name"> Lunar </h3>
				<span className="navigation__directory">
					<a href='#' className="navigation__login"> Login </a>
					<span> |</span>
					<a href='#' className="navigation__register"> Register </a>
				</span>
			</div>
		)
	}
}

export default Navigation;