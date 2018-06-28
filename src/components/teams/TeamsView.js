import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import TeamsList from './TeamsList';

const TeamsView = (props) => {
  return (
    <Container>
      <TeamsList
        teams={props.teams}
      />
    </Container>
  );
};

TeamsView.propTypes = {
  teams: PropTypes.string,
};

export default TeamsView;
