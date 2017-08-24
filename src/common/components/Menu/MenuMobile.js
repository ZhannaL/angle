import React , { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './MenuMobile.css';


const ButtonMenu = (props) => (
	<Button className="buttonMenu"
	icon
	onClick={props.onClick}>
		<Icon name='list layout' size='big' />
	</Button>
)


class MenuMin extends Component {
	state = {
		visible: false
	}

	toggleVisibility = () => {
		this.setState({visible: !this.state.visible});
	}

	render() {
	    return (
			<div className ="mobileMenu">
				<div className="button_menu"> <ButtonMenu onClick={this.toggleVisibility}></ButtonMenu>  </div>
				<div className={`menu_mobile ${this.state.visible ? 'menu_visible' : 'menu_hidden'}`}>
					<ul id="nav_mobile">
						<li> <a href="index.html">Главная </a></li>
						<li ><a href="index0.html">Продукция</a></li>
							<ul>
								<li className="pointTo"><a href=" ">Острый угол<b>ОК</b></a></li>
								<li className="pointTo"><a href=" ">Прямой угол<b>ОК</b></a></li>
								<li className="pointTo"><a href=" ">Тупой угол<b>ОК</b></a></li>
								<li className="pointTo"><a href=" ">Развернутый угол<b>ОК</b></a></li>
							</ul>
						<li><a href=" ">Контакты</a></li>
						<li><a href=" ">Корзина</a></li>
					</ul>
		  		</div>
	  		</div>
		);
	}
}
export default MenuMin;




// const IconE = () => (
//     <Icon name='list layout' size='big' />
// )
// // icon='list layout'
//
// const DropdownExampleDropdown = () => (
//    <Dropdown icon='list layout' >
//     <Dropdown.Menu>
//       <Dropdown.Item text='Главная' />
//       <Dropdown.Item text='Категории'  />
//       <Dropdown.Item text='Остр' />
//       <Dropdown.Item text='Прям'  />
//       <Dropdown.Item text='Make a copy' />
//       <Dropdown.Item text='Move to folder' />
//       <Dropdown.Item text='Move to trash' />
//     </Dropdown.Menu>
//   </Dropdown>
// )
//
// export default DropdownExampleDropdown
