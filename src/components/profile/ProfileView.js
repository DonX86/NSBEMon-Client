import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import ProfileProfile from './ProfileProfile';
import PointsVerticalList from './points/PointsVerticalList';

import profileImage from '../../images/pokemon_profile.jpg';

const ProfileView = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="12"
          sm="12"
          md="4">
          <img
            src={profileImage}
            className="float-left img-thumbnail"
            alt="Viewer Profile"
          />
        </Col>
        <Col>
          <ProfileProfile viewer={props.viewer} />
        </Col>
      </Row>
      <br />
      <Row>
        <PointsVerticalList trainings={props.viewer.trainings} />
      </Row>
    </Container>
  );
};

ProfileView.propTypes = {
  viewer: PropTypes.object,
};

export default ProfileView;
