import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import { authenticationClient } from '../../authentication/Authentication';
import { LoginError } from './LoginError';
import LoginFields from './LoginFields';

const LoginHeader = () => (<h2>
Log into your account
</h2>);

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    authenticated: false,
    error: '',
  };

  componentWillMount() {
    this.setState({
      authenticated: authenticationClient.isLoggedIn(),
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    authenticationClient
      .login(email, password)
      .then(() => {
        // The authentication client received a valid token and saved it
        this.props.handleLogin();
        this.setState({
          authenticated: true,
          error: '',
        });
      })
      .catch((err) => {
        // Password was invalid... maybe show invalid message
        this.setState({
          error: err,
          authenticated: false,
        });
      });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return this.state.authenticated ? (
      <Redirect push
        to="/" />
    ) : (
      <Container>
        <LoginHeader />
        <LoginError error={this.state.error} />
        <LoginFields
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func,
};

export default Login;
