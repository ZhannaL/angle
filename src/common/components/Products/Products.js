import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Products.scss';
import selectСontent from '../Menu/MenuActions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  selectСontent,
};
class Products extends Component {
  selectСontent(page) {
    this.props.selectСontent(page);
  }
  render() {
    return (
      <div className="products">
        <div className="img"> <img src={this.props.img} alt="альтернативный текст" /> </div>
        <div className="descr">
          <p className="propName"><b>{this.props.name}</b></p>
          <br />
          <p>{this.props.description1}</p>
          <p>{this.props.description2}</p>
          <p>{this.props.description3}</p>
          <br />
          <p className="goto"><a href="/acute" onClick={() => this.selectСontent(this.props.description4)}>Перейти к списку</a></p>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
