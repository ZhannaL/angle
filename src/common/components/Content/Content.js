import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Content.css';


import Home from '../Home/Home.js';
import Categories from '../Products/Categories.js';
import Acute from '../Angles/Acute.js';
import Contacts from '../Contacts/Contacts.js';
import Basket from '../Basket/Basket.js';

const pages={
	home:Home,
	acute:Acute,
	contacts:Contacts,
	basket:Basket,
	categories:Categories
}

const mapStateToProps = state => {
	console.log("mapStateToProps=", state.menu.content)
	return {
		content:state.menu.content
	}
}

class Content extends Component {

	render() {
		let Page=pages[this.props.content]||Home
		console.log("Content=", pages[this.props.content])
		return (
			<div>
				<Page />
			</div>
		);
	}
}
export default connect(
	mapStateToProps
)(Content);
