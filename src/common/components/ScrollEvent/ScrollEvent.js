import React from 'react';

class ScrollEvent extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.props.handleScrollCallback(event);
  }

  render() {
    return false;
  }
}

export default ScrollEvent;
