import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Container, Row, Col } from 'react-bootstrap';

import { getCities } from 'redux/actions';
import { selectCities, selectLoadingCities } from 'redux/selectors';

function Home() {
  return (
    <Container>
      <Row>
        <Col>23</Col>
        <Col>33</Col>
      </Row>
    </Container>
  );
}

const mapState = createStructuredSelector({
  cities: selectCities(),
  loadingCities: selectLoadingCities(),
});

function mapDispatch(dispatch) {
  return {
    getCities: bindActionCreators(getCities, dispatch),
  }
}

export default connect(mapState, mapDispatch)(Home);
