import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import Load from '../utilities/Load';
import ProfileView from './ProfileView';

class Profile extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={() => <ProfileView viewer={viewer} />}
      />
    );
  }
}

// Attach the data from the server
const ProfileQuery = gql`
  query ProfileQuery {
    viewer {
      firstName
      lastName
      trainings {
        approved
        category {
          title
          points
        }
      }
    }
  }
`;

Profile.propTypes = {
  data: PropTypes.object,
};

export default graphql(ProfileQuery)(Profile);
