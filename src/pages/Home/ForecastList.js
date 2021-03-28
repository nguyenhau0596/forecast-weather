import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col, Container, Spinner, Alert, Button } from 'react-bootstrap';

import WeatherCard from 'components/WeatherCard';
import { getForecast } from 'redux/actions';
import {
  selectForecast,
  selectLoadingForecast,
  selectForecastLocationName,
  selectForecastErrorMessage,
  selectForecastLocationId,
} from 'redux/selectors';
import { getForecastByDays } from 'utils';
import { DEFAULT_LOCATION } from 'configs/location';

function ForecastList({
  loadingForecast,
  forecasts,
  locationName,
  getForecast,
  errorMessage,
  id,
}) {
  useEffect(() => {
    if (!locationName) {
      getForecast(DEFAULT_LOCATION.id, DEFAULT_LOCATION.locationName);
    }
  });

  const onRetry = () => {
    getForecast(id, locationName);
  }

  return (
    <Container className="bg-light p-4">
      {!locationName && (
        <div className="lead">
          Please select a location to see its forecast.
        </div>
      )}
      {locationName && (
        <h3 className="text-center mb-4">{locationName}</h3>
      )}
      {loadingForecast && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <div className="text-dark">
            Loading data
          </div>
        </div>
      )}
      {!loadingForecast && (
        <Row>
          {getForecastByDays(forecasts, 5).map((item) => (
            <Col md={4} key={item.id}>
              <WeatherCard
                minTemp={item.min_temp}
                maxTemp={item.max_temp}
                applicableDate={item.applicable_date}
              />
            </Col>
          ))}
        </Row>
      )}
      {errorMessage && (
        <Alert variant="danger" className="text-center">
          {errorMessage}
          <div className="mt-2">
            <Button variant="info" onClick={onRetry}>Retry</Button>
          </div>
        </Alert>
      )}
    </Container>
  );
}

ForecastList.defaultProps = {
  loadingForecast: false,
  errorMessage: '',
}

ForecastList.propTypes = {
  getForecast: PropTypes.func.isRequired,
  locationName: PropTypes.string.isRequired,
  forecasts: PropTypes.object.isRequired,
  id: PropTypes.number,
  loadingForecast: PropTypes.bool,
  errorMessage: PropTypes.string,
}

const mapState = createStructuredSelector({
  forecasts: selectForecast(),
  loadingForecast: selectLoadingForecast(),
  locationName: selectForecastLocationName(),
  errorMessage: selectForecastErrorMessage(),
  id: selectForecastLocationId(),
});

function mapDispatch(dispatch) {
  return {
    getForecast: bindActionCreators(getForecast, dispatch),
  }
}

export default connect(mapState, mapDispatch)(ForecastList);
