import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Container, Input, Button } from 'reactstrap';
import ListTable from '../../utilities/ListTable';
import _ from 'lodash';
import Load from '../../utilities/Load';
import PropTypes from 'prop-types';

class CurrentUsers extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  updateMember = (field, userId) => (event) => {
    console.log('field: ', field);
    console.log('userId: ', userId);
    console.log('event: ', event.target.value);
  };

  handleCreateMemberUpdate = (event) => {
    const previousState = this.state.newMember || {};

    this.setState({ newMember: { ...previousState, [event.target.name]: event.target.value }});
  };

  handleCreateMember = (event) => {
    console.log('prevState: ', this.state.newMember);
  };

  transformMembers = (members) => {
    const inputMembers = members.map((member) => {
      const newMember = { ...member };
      _.set(
        newMember,
        'firstName',
        <Input
          type="text"
          defaultValue={member.firstName}
          onBlur={this.updateMember('firstName', member.email)}
        />
      );
      _.set(
        newMember,
        'lastName',
        <Input
          type="text"
          defaultValue={member.lastName}
          onBlur={this.updateMember('lastName', member.email)}
        />
      );
      _.set(
        newMember,
        'email',
        <Input type="email"
          readOnly
          defaultValue={member.email} />
      );
      _.set(newMember, 'team', {
        name: (
          <Input
            type="text"
            defaultValue={member.team.name}
            onBlur={this.updateMember('teamName', member.email)}
          />
        ),
      });
      newMember.addDeleteButton = (
        <Button className="btn btn-danger">
Delete
        </Button>
      );

      newMember.resetPassword = (
        <Button className="btn btn-success">
Reset Password
        </Button>
      );
      return newMember;
    });

    inputMembers.unshift({
      firstName: <Input name="newMemberFirstName"
        onChange={this.handleCreateMemberUpdate}
        type="text" />,
      lastName: <Input name="newMemberLastName"
        onChange={this.handleCreateMemberUpdate}
        type="text" />,
      email: <Input name="newMemberEmail"
        onChange={this.handleCreateMemberUpdate}
        type="email" />,
      team: {
        name: <Input name="newMemberTeam"
          onChange={this.handleCreateMemberUpdate}
          type="text" />,
      },
      addDeleteButton: (
        <Button className="btn btn-success"
          onClick={this.handleCreateMember}>
          Add
        </Button>
      ),
    });

    return inputMembers;
  };

  render() {
    const headers = [
      { title: 'First Name', key: 'firstName' },
      { title: 'Last Name', key: 'lastName' },
      { title: 'Email', key: 'email' },
      { title: 'Team Name', key: 'team.name' },
      { title: 'Add/Delete', key: 'addDeleteButton' },
      { title: 'Reset', key: 'resetPassword' },
    ];

    return (
      <Container>
        <Load
          loading={this.props.data.loading}
          error={this.props.data.error}
          onLoad={() => (
            <ListTable
              headers={headers}
              items={this.transformMembers(this.props.data.memberGetAll)}
            />
          )}
        />
      </Container>
    );
  }
}

CurrentUsers.propTypes = {
  data: PropTypes.object,
};

const CurrentUserQuery = gql`
  query CurrentUserQuery {
    memberGetAll {
      email
      isLeader
      firstName
      lastName
      team {
        name
      }
    }
  }
`;

export default graphql(CurrentUserQuery)(CurrentUsers);
