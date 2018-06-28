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
import memberImage from '../../images/pokemon_profile.jpg';

import { calculatePoints } from '../utilities/calculatePoints';

const MemberItem = (props) => {
  const points = calculatePoints(props.member.trainings);
  const progress = points % 10;
  const level = Math.floor(points / 10);

  return (
    <Container>
      <Row>
        <Col xs="12"
          sm="12"
          md="4">
          <img
            src={memberImage}
            className="float-left img-thumbnail"
            alt="Leader Profile"
          />
        </Col>
        <Col style={{ marginTop: '25px' }}>
          <ListGroup>
            <ListGroupItem active>
              <ListGroupItemHeading>
                Name
              </ListGroupItemHeading>
              <ListGroupItemText>
                {props.member.firstName}
                {' '}
                {props.member.lastName}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                <b>
                  Points
                </b>
                {' '}
                {points}
                <br />
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

MemberItem.propTypes = {
  member: PropTypes.object,
};

export default MemberItem;
