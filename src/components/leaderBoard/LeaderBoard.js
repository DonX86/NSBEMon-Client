import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import Load from '../utilities/Load';
import MembersView from '../members//MembersView';

class LeaderBaord extends React.Component {
  render() {
    // Gather the props from the apollo call
    const {
      data: { loading, error, memberGetAll },
    } = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={() => <MembersView members={memberGetAll} />}
      />
    );
  }
}

// Attach the data from the server
const AllMembersQuery = gql`
  query AllMembersQuery {
    memberGetAll {
      email
      firstName
      lastName
      trainings {
        category {
          points
        }
      }
    }
  }
`;

LeaderBaord.propTypes = {
  data: PropTypes.object,
};

export default graphql(AllMembersQuery)(LeaderBaord);
