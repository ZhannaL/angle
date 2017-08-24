import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux'
import { selectСontent } from '../Menu/MenuActions'

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = {
	selectСontent
}
class Products extends Component {
	selectСontent(page){
		this.props.selectСontent(page)
	}
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
					<p className="goto"><a onClick={()=>this.selectСontent(this.props.description4)}>Перейти к списку</a></p>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);
