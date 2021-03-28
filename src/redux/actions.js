import {
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED,
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILED,
} from 'redux/constant';

export function getCities(query) {
  return {
    query,
    type: GET_CITIES,
  }
}

export function getCitiesSuccess(data) {
  return {
    data,
    type: GET_CITIES_SUCCESS,
  }
}

export function getCitiesFailed() {
  return {
    type: GET_CITIES_FAILED,
  }
}

export function getForecast(id, label) {
  return {
    id,
    label,
    type: GET_FORECAST,
  }
}

export function getForecastSuccess(data) {
  return {
    data,
    type: GET_FORECAST_SUCCESS,
  }
}

export function getForecastFailed(message) {
  return {
    message,
    type: GET_FORECAST_FAILED,
  }
}
