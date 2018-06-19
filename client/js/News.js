import React, {Component} from 'react';

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="slideshow__slide">
				<div className="slideshow--index">{this.props.index}/{this.props.length}</div>
				<img className='slideshow--img' src={this.props.image}></img>
			</div>
			
		)
	}
}

export default News;