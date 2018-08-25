import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


import './Logo.scss';
import ModalCallBack from '../Modals/ModalCallBack';
import { selectСontent } from './LogoActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  selectСontent,
};

class Logo extends Component {
  selectСontent(page) {
    this.props.selectСontent(page);
  }
  render() {
    return (
      <div className="top_logo">
        <div className="logo">
          <a className="logo_pic" href="/" onClick={() => this.selectСontent('home')} />
          <div className="desc">
            Первый офис открылся <br />
            1 января 2016 года
          </div>
        </div>
        <div className="tel">
          <a className="tel_logo" href="/contacts" onClick={() => this.selectСontent('contacts')}>
            Телефон для связи: <br />
            +7(960)226-51-01
          </a><br />
          <ModalCallBack />
        </div>
        <a className="basket_logo" href="/basket" onClick={() => this.selectСontent('basket')}>
          {/* <Link to={`/basket`}> */}
          <Icon name="shop" size="big" />
            Корзина(0)
          {/* </Link> */}
        </a>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logo);
