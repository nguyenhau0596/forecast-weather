import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, Row, Col } from 'react-bootstrap';

function WeatherCard({ minTemp, maxTemp, applicableDate }) {
  const date = moment(applicableDate, 'YYYY/MM/DD');
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>
          {date.format('dddd')}
          {', '}
          <small className="text-muted">
            {date.format('LL')}
          </small>
        </Card.Title>
        <Row className="mt-4">
          <Col>
            <Card.Subtitle className="text-muted text-center">
              Min
              <h1>
                {parseInt(minTemp)}
                <small className="text-muted">&#8451;</small>
              </h1>
            </Card.Subtitle>
          </Col>
          <Col>
            <Card.Subtitle className="text-muted text-center">
              Max
              <h1>
                {parseInt(maxTemp)}
                <small className="text-muted">&#8451;</small>
              </h1>
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

WeatherCard.propTypes = {
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  applicableDate: PropTypes.string.isRequired,
}

export default WeatherCard;
