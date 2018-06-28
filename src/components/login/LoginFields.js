import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const LoginFields = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="loginEmail">
          Email
        </Label>
        <Input
          id="loginEmail"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => props.onEmailChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="loginPassword">
          Password
        </Label>
        <Input
          id="loginPassword"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => props.onPasswordChange(e)}
        />
      </FormGroup>
      <Button outline
        onClick={(e) => props.onSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
};

LoginFields.propTypes = {
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default LoginFields;
