import React, { Component } from 'react';
import './Logo.css';


class Logo extends Component {
 	render() {
    	return (
			<div className="top_logo">
				<div className="logo">
					<a className="logo_pic" href="index.html"> </a>
					<div className="desc">
					Первый офис открылся <br/>
					1 января 2016 года
					</div>
				</div>
				<div className="tel">
					Телефон для связи: <br/>
					+7(960)226-51-01
				</div>
			</div>
    	);
  	}
}

export default Logo;
