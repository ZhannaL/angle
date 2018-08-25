import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import './MenuSideBar.css';
import { connect } from 'react-redux'
import { selectСontent } from './MenuActions'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = {
	selectСontent
}

class MenuSideBar extends Component {
	selectСontent(page){
		this.props.selectСontent(page)
	}
	render() {
		return (
			<Menu
				 widths={4}
				icon='labeled'
				inverted
				fluid
				horizontal
				className="MenuSideBar">
				<Menu.Item header>
					 <Link to={`/`}>
					 <Icon name='home' size='large' />
						Главная
					 </Link>
               </Menu.Item>
				<Dropdown
					selection
					onClick={()=>this.selectСontent('categories')}
					item
					text='Продукция'>
					<Dropdown.Menu >
						<Dropdown.Item  href={`/categories`} text='Все виды' onClick={()=>this.selectСontent('categories')}/>
						<Dropdown.Item  href={`/acute`} text='Острый угол' onClick={()=>this.selectСontent('acute')}/>
						<Dropdown.Item  text='Прямой угол' onClick={()=>this.selectСontent('contacts')}/>
						<Dropdown.Item  text='Тупой угол' onClick={()=>this.selectСontent('obtuse')}/>
						<Dropdown.Item  text='Развернутый угол' onClick={()=>this.selectСontent('deployed')}/>
					</Dropdown.Menu>
				</Dropdown>
				<Menu.Item >
					<Link to={`/contacts`}>
						<Icon name='phone' size='large' />
		 				Контакты
	   				</Link>
			   </Menu.Item>
			   <Menu.Item >
				   <Link to={`/basket`}>
					<Icon name='shop' size='large' />
					   Корзина(0)
				   </Link>
   		   		</Menu.Item>

			</Menu>
		)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuSideBar);


{/* <Dropdown item text='Продукция'>
	<Dropdown.Menu>
		<Dropdown.Item  text='Острый угол' onClick={()=>this.selectСontent('acute')}/>
		<Dropdown.Item  text='Прямой угол' onClick={()=>this.selectСontent('direct')}/>
		<Dropdown.Item  text='Тупой угол' onClick={()=>this.selectСontent('obtuse')}/>
		<Dropdown.Item  text='Развернутый угол' onClick={()=>this.selectСontent('deployed')}/>
	</Dropdown.Menu>
</Dropdown> */}
