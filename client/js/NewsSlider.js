import React, {Component} from 'react';
import News from './News';

class NewsSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			slide: 0
		}
	}

	changeSlide(e) {
		console.log(e.target.value);
		if (e.target.value === "next" && this.state.slide < this.props.images.length - 1) {
			this.setState((prevState) => {
				return {
					slide: prevState.slide + 1
				}
			});
		} 

		if (e.target.value === "prev" && this.state.slide > 0) {
			this.setState((prevState) => {
				return {
					slide: prevState.slide - 1
				}
			});
		} 
		console.log(this.state);
	}

	render(){
		const {images} = this.props;
		return (
			<div className="slideshow"> 
				<div className="slideshow__slide">
					{/* <div className="slideshow--index"> {this.state.slide + 1}/{this.props.images.length}</div> */}
					<img className='slideshow--img' src={this.props.images[this.state.slide]}></img>
				</div>
				<button className="slideshow__prev" value="prev" onClick={this.changeSlide.bind(this)}> &lt; </button>
				<button className="slideshow__next" value="next"onClick={this.changeSlide.bind(this)}> &gt; </button>
			</div>
		)
	}
}

// {
// 	images.map((image, index) => {
// 		return <News image={image} length={images.length} index={index+1} key={index} />
// 	})
// }


export default NewsSlider;