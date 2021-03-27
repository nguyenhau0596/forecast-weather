import {
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED,
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
