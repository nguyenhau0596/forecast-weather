import { call, put, takeLatest, all } from 'redux-saga/effects';

import MetaWeatherService from 'services/metaweather';
import {
  getCitiesSuccess,
  getCitiesFailed,
  getForecastSuccess,
  getForecastFailed,
} from 'redux/actions';
import {
  GET_CITIES,
  GET_FORECAST,
} from 'redux/constant';

const metaWeatherService = new MetaWeatherService();

function* fetchCities(action) {
  try {
    const response = yield call(metaWeatherService.fetchCities, action.query);
    yield put(getCitiesSuccess(Array.isArray(response.data) ? response.data : []));
  } catch (e) {
    yield put(getCitiesFailed());
  }
}

function* watchCities() {
  yield takeLatest(GET_CITIES, fetchCities);
}

function* fetchForecast(action) {
  try {
    const response = yield call(metaWeatherService.fetchForecast, action.id);
    yield put(getForecastSuccess(response.data));
  } catch (e) {
    yield put(getForecastFailed('Unexpected error occurred.'));
  }
}

function* watchForecast() {
  yield takeLatest(GET_FORECAST, fetchForecast);
}

export default function* rootSaga() {
  yield all([
    watchCities(),
    watchForecast(),
  ]);
}
