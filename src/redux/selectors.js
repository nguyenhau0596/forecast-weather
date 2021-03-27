import { createSelector } from 'reselect';

const getCitiesDomain = () => state => state.cities;

const selectCities = () => createSelector(
  getCitiesDomain(),
  (state) => state.get('data').toJS(),
);

const selectLoadingCities = () => createSelector(
  getCitiesDomain(),
  (state) => state.get('loading'),
);

export {
  selectCities,
  selectLoadingCities,
}
