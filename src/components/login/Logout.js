import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  props.handleLogout();
  return (<Redirect to="/Login" />);
};

Logout.propTypes = {
  handleLogout: PropTypes.func,
};

export default Logout;
