import React, {Component} from 'react';


class ListLoading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			// <div className="loading"> 
			// 	<div className="loading__eclipse"></div> 
			// </div>
			<tbody className="loading">
				<tr>
					<td colSpan="4">
							<div className="loading__img"></div> 
					</td>
				</tr> 
			</tbody>

		)
	}
}

export default ListLoading;