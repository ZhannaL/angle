import React, { Component } from 'react';
import { Grid, Sidebar, Segment, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './App.scss';

import Logo from '../common/components/Logo/Logo';
// import MenuMobile from '../common/components/Menu/MenuMobile.js';
import Content from '../common/components/Content/Content';
// import MenuSideBar from '../common/components/Menu/MenuSideBar.js';
import MenuDiv from '../common/components/Menu/Menu';
import Footer from '../common/components/Footer/Footer';

import Home from '../common/components/Home/Home';
import Categories from '../common/components/Products/Categories';
import Acute from '../common/components/Angles/Acute';
import Contacts from '../common/components/Contacts/Contacts';
import Basket from '../common/components/Basket/Basket';
import ScrollEvent from '../common/components/ScrollEvent/ScrollEvent';
import { setScroll } from './AppAction';
import ButtonToTop from '../common/components/TopButton/TopButton';

import { Router, Route } from 'react-router-dom';
import { history } from '../Store';
import { Switch } from 'react-router-dom';

const mapDispatchToProps = {
  setScroll,
};

class App extends Component {
  handleScrollCallback() {
    this.props.setScroll(document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollTop)
  }

  render() {
    return (
      <div>
        <Grid className="gridApp">
          <Grid.Row >
            <Grid.Column width={16} only="computer">
              <Logo />
            </Grid.Column>
            {/* <Grid.Column width={1}> </Grid.Column> */}
          </Grid.Row>

          <Grid.Row only="tablet mobile">
            <Grid.Column width={16}>
              <MenuDiv widths={5} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="computer">
            <Grid.Column width={16}>
              <MenuDiv widths={8} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16} >
              <Router history={history}>
                {/* <Sidebar.Pushable as={Segment} className="menuSidebarPushable">
<Sidebar
as={Menu}

animation ='push'
direction ='top'
visible={true}
inverted
id="menuSidebar">
<MenuSideBar/>
</Sidebar>
<Sidebar.Pusher  id="segment">
<Segment basic >
<Switch>
<Route exact path="/" component={Home} />
<Route path="/categories" component={Categories}/>
<Route path="/acute" component={Acute}/>
<Route path="/contacts" component={Contacts}/>
<Route path="/basket" component={Basket}/>
  </Switch>
</Segment>
</Sidebar.Pusher>
</Sidebar.Pushable> */}
                <div className="segmentcontent forMobile">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/acute" component={Acute} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/basket" component={Basket} />
                  </Switch>
                </div>
              </Router>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="footer">
            <Grid.Column width={16} >
              <Footer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ButtonToTop />
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
