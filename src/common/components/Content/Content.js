import React from 'react';
import { connect } from 'react-redux';

import './Content.css';


import Home from '../Home/Home';
import Categories from '../Products/Categories';
import Acute from '../Angles/Acute';
import Contacts from '../Contacts/Contacts';
import Basket from '../Basket/Basket';

const pages = {
  home: Home,
  acute: Acute,
  contacts: Contacts,
  basket: Basket,
  categories: Categories,
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps=', state.menu.content);
  return {
    content: state.menu.content,
  };
};

const Content = (props) => {
  const { content } = props;
  const Page = pages[content] || Home;
  console.log('Content=', pages[content]);
  return (
    <div>
      <Page />
    </div>
  );
};
export default connect(mapStateToProps)(Content);
