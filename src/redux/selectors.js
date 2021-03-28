import { createSelector } from 'reselect';

const getCitiesDomain = () => state => state.cities;

const getForecastDomain = () => state => state.forecasts;

const selectCities = () => createSelector(
  getCitiesDomain(),
  (state) => state.get('data').toJS(),
);

const selectLoadingCities = () => createSelector(
  getCitiesDomain(),
  (state) => state.get('loading'),
);

const selectLoadingForecast = () => createSelector(
  getForecastDomain(),
  (state) => state.get('loading'),
);

const selectForecast = () => createSelector(
  getForecastDomain(),
  (state) => state.get('data').toJS(),
);

const selectForecastLocationName = () => createSelector(
  getForecastDomain(),
  (state) => state.get('locationName'),
);

const selectForecastLocationId = () => createSelector(
  getForecastDomain(),
  (state) => state.get('id'),
);

const selectForecastErrorMessage = () => createSelector(
  getForecastDomain(),
  (state) => state.get('errorMessage'),
);

export {
  selectCities,
  selectLoadingCities,
  selectLoadingForecast,
  selectForecast,
  selectForecastLocationName,
  selectForecastLocationId,
  selectForecastErrorMessage,
}
