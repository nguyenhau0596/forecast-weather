import React from 'react';
import { Container } from 'react-bootstrap';

import LocationInput from './LocationInput';
import ForecastList from './ForecastList';

export default function Home() {
  return (
    <Container>
      <LocationInput />
      <ForecastList />
    </Container>
  );
}
