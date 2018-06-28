import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const LoginError = ({ error }) =>
  error ? (
    <Alert color="danger">
      <h1>
        <strong>
          Error!
        </strong>
        {' '}
        {error}
      </h1>
    </Alert>
  ) : null;

LoginError.propTypes = {
  error: PropTypes.string,
};

export { LoginError };
