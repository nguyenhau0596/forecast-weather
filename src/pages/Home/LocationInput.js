import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Row } from 'react-bootstrap';

import { getCities, getForecast } from 'redux/actions';
import { selectCities, selectLoadingCities } from 'redux/selectors';

function LocationInput({ loadingCities, getCities, cities, getForecast }) {
  const [inputValue, changeInputValue] = useState('');

  const debounceGetCities = useRef(_.debounce(getCities, 500)).current;

  const handleInputChange = (value) => {
    changeInputValue(value);
    if (value) {
      debounceGetCities(value);
    }
  }

  const onSelectCity = (option) => {
    if (option) {
      getForecast(option.value, option.label)
    }
  }

  const options = Array.isArray(cities) ? cities.map((item) => ({ label: item.title, value: item.woeid })) : [];

  return (
    <Row className="mt-5 mb-5">
      <Select
        className="location-select mx-auto"
        placeholder="Search for location"
        inputValue={inputValue}
        isLoading={loadingCities}
        onInputChange={handleInputChange}
        onChange={onSelectCity}
        isClearable
        isSearchable
        options={options}
      />
    </Row>
  );
}

LocationInput.defaultProps = {
  loadingCities: false,
  cities: [],
}

LocationInput.propTypes = {
  getCities: PropTypes.func.isRequired,
  getForecast: PropTypes.func.isRequired,
  cities: PropTypes.array,
  loadingCities: PropTypes.bool,
}

const mapState = createStructuredSelector({
  cities: selectCities(),
  loadingCities: selectLoadingCities(),
});

function mapDispatch(dispatch) {
  return {
    getCities: bindActionCreators(getCities, dispatch),
    getForecast: bindActionCreators(getForecast, dispatch),
  }
}

export default connect(mapState, mapDispatch)(LocationInput);
