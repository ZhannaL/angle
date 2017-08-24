import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import './MenuSideBar.css';
import { connect } from 'react-redux'
import { selectСontent } from './MenuActions'

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
				inverted
				fluid
				vertical
				size='massive'
				className="MenuSideBar">

				<Menu.Item onClick={()=>this.selectСontent('home')}>
	                 Главная
               </Menu.Item>
				<Dropdown onClick={()=>this.selectСontent('categories')} item text='Продукция'>
					<Dropdown.Menu>
						<Dropdown.Item  text='Острый угол' onClick={()=>this.selectСontent('acute')}/>
						<Dropdown.Item  text='Прямой угол' onClick={()=>this.selectСontent('contacts')}/>
						<Dropdown.Item  text='Тупой угол' onClick={()=>this.selectСontent('obtuse')}/>
						<Dropdown.Item  text='Развернутый угол' onClick={()=>this.selectСontent('deployed')}/>
					</Dropdown.Menu>
				</Dropdown>
				<Menu.Item onClick={()=>this.selectСontent('contacts')}>
					 Контакты
			   </Menu.Item>
			   <Menu.Item onClick={()=>this.selectСontent('basket')}>
				 	Корзина
   		   		</Menu.Item>
				<Menu.Item >
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
