import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './TopButton.scss';


const mapStateToProps = state => ({
  scrollTop: state.app.scrollTop,
});


const ButtonToTop = props => (
  (props.scrollTop > 80)
    ? <Button
      className="ButtonToTop"
      // icon
      circular
      onClick={() => { document.documentElement.scrollTop = 0; }}
    >
      <Icon name="arrow up" size="large" />
    </Button>
    : <div />
);

export default connect(
  mapStateToProps,
  null,
)(ButtonToTop);
