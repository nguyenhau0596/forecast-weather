import { call, put, takeLatest, all } from 'redux-saga/effects';

import MetaWeatherService from 'services/metaweather';
import { getCitiesSuccess, getCitiesFailed } from 'redux/actions';
import { GET_CITIES } from 'redux/constant';

const metaWeatherService = new MetaWeatherService();

function* fetchCities(action) {
  try {
    const response = yield call(metaWeatherService.fetchCities, action.query);
    yield put(getCitiesSuccess(response.data));
  } catch (e) {
    yield put(getCitiesFailed());
  }
}

function* watchCities() {
  yield takeLatest(GET_CITIES, fetchCities);
}

export default function* rootSaga() {
  yield all([
    watchCities()
  ]);
}
