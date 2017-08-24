import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
		<div className="menu" >
			<ul id="nav">
				<li> <a href="index.html">Главная </a></li>
				<li className="sub"><a href="index0.html">Продукция</a></li>
					<ul id="nav2">
						<li className="point"> <a href=" ">Острый угол<b>ОК</b></a></li>
						<li className="point"><a href=" ">Прямой угол<b>ОК</b></a></li>
						<li className="point"><a href=" ">Тупой угол<b>ОК</b></a></li>
						<li className="point"><a href=" ">Развернутый угол<b>ОК</b></a></li>
					</ul>
				<li><a href=" ">Контакты</a></li>
				<li><a href=" ">Корзина</a></li>
			</ul>
  	  </div>
    );
  }
}

export default Menu;
