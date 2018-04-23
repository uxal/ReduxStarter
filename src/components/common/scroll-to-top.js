/**
 * This component is used when the routes are changed. It ensures the new page will always be scrolled on top
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToTop extends Component {
  componentDidMount() {
    if (this.props.scrollOnMount) {
      window.scrollTo(0, 0);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object,
  children: PropTypes.array.isRequired,
};

ScrollToTop.defaultProps = {
  location: {},
};

ScrollToTop.propTypes = {
  scrollOnMount: PropTypes.bool,
};

ScrollToTop.defaultProps = {
  scrollOnMount: false,
};

export default ScrollToTop;
