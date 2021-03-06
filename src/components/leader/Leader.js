import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import Load from '../utilities/Load';
import LeaderView from './LeaderView';

class Leader extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={() => <LeaderView viewer={viewer} />}
      />
    );
  }
}

// Attach the data from the server
const LeaderQuery = gql`
  query LeaderQuery {
    viewer {
      email
      isAdmin
      isLeader
      team {
        name
        leaders {
          email
          firstName
          lastName
        }
      }
    }
  }
`;

Leader.propTypes = {
  data: PropTypes.object,
};

export default graphql(LeaderQuery)(Leader);
