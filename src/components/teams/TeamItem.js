import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Container,
  Col,
  Row,
  Progress,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { calculateTeamPoints } from '../utilities/calculatePoints';
import teamImage from '../../images/pokemon_profile.jpg';

const TeamItem = (props) => {
  const points = calculateTeamPoints(props.team.members);
  const progress = points % 10;
  const level = Math.floor(points / 10);

  return (
    <Container>
      <Row>
        <Col xs="12"
          sm="12"
          md="4">
          <img
            src={teamImage}
            className="float-left img-thumbnail"
            alt="Team"
          />
        </Col>
        <Col style={{ marginTop: '25px' }}>
          <ListGroup>
            <ListGroupItem active>
              <ListGroupItemHeading>
                Team
              </ListGroupItemHeading>
              <ListGroupItemText>
                {props.team.name}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                <b>
                  Points
                </b>
                {' '}
                {points}
                {' '}
                <br />
                {' '}
                <b>
                  Level
                </b>
                {' '}
                {level}
              </ListGroupItemHeading>
              <Progress animated
                color="warning"
                value={progress} />
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object,
};

export default TeamItem;
