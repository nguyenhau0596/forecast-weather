import { fromJS } from 'immutable';

import {
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILED,
} from "redux/constant";

const initialState = fromJS({
  data: {},
  loading: false,
  locationName: '',
  id: null,
  errorMessage: '',
});

export default function mines(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST: {
      return state.set('loading', true).set('data', fromJS({})).set('locationName', action.label).set('id', action.id).set('errorMessage', '');
    }

    case GET_FORECAST_FAILED: {
      return state.set('loading', false).set('data', fromJS({})).set('errorMessage', action.message);
    }

    case GET_FORECAST_SUCCESS: {
      return state.set('loading', false).set('data', fromJS(action.data)).set('errorMessage', '');
    }

    default:
      return state;
  }
}
