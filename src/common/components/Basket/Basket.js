import React, { Component } from 'react';
import './Basket.css';

class Basket extends Component {
	render() {
		return (
			<div className="basket">
				<p>sometext </p> 
				<sup>sometext for conflict</sup>
				<p>sometext for example and chanches</p>
				<b>sometext for example and conflict</b>
				<div className="">
					<div className="example">
						<p>sometext for example</p>

					</div>
				</div>
			</div>
		);
	}
}

export default Basket;
