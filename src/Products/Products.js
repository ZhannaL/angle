import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
	render() {
		return (
			<div className="products">
				<div className="img"> <img src={this.props.img}/> </div>
				<div className="descr">
					<p><b>{this.props.name}</b></p>
					<br/>
					<p>{this.props.description1}</p>
					<p>{this.props.description2}</p>
					<p>{this.props.description3}</p>
					<br/>
					<p className="goto"><a href="index.html">Перейти к списку</a></p>
				</div>
			</div>
		);
	}
}

export default Products;
