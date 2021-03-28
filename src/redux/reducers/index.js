import { combineReducers } from 'redux';

import cities from './cities';
import forecasts from './forecasts';

const rootReducer = combineReducers({
  cities,
  forecasts
});

export default rootReducer;
