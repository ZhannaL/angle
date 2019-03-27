import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './Menu.scss';
// import {
//   Router,
//   Route,
//   Link,
// } from 'react-router-dom';
import selectСontent from './MenuActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  selectСontent,
};
class MenuDiv extends Component {
  selectСontent(page) {
    const { selectСontent: selectСontentProps } = this.props;
    selectСontentProps(page);
  }

  render() {
    const { widths } = this.props;
    return (
      <Menu
        widths={widths}
        icon="labeled"
        // color="grey"
        inverted
        className="MenuSideBar"
      >
        <Menu.Item header href="/" onClick={() => this.selectСontent('home')}>
          <Icon name="home" size="large" />
          Главная
        </Menu.Item>
        <Dropdown
          deburr
          item
          text="Продукция"
        >
          <Dropdown.Menu className="dropDown">
            <Dropdown.Item href="/categories" text="Все виды" onClick={() => this.selectСontent('categories')} />
            <Dropdown.Item href="/acute" text="Острый угол" onClick={() => this.selectСontent('acute')} />
            <Dropdown.Item text="Прямой угол" onClick={() => this.selectСontent('contacts')} />
            <Dropdown.Item text="Тупой угол" onClick={() => this.selectСontent('obtuse')} />
            <Dropdown.Item text="Развернутый угол" onClick={() => this.selectСontent('deployed')} />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item href="/contacts" onClick={() => this.selectСontent('contacts')}>
          <Icon name="phone" size="large" />
          Контакты
        </Menu.Item>
        <Menu.Item href="/review" onClick={() => this.selectСontent('review')}>
          <Icon name="pencil" size="large" />
          Отзывы
        </Menu.Item>
        <Menu.Item href="/basket" onClick={() => this.selectСontent('basket')}>
          <Icon name="shop" size="large" />
          Корзина(0)
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDiv);
