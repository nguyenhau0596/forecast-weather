import { fromJS } from 'immutable';

import {
  GET_CITIES,
  GET_CITIES_FAILED,
  GET_CITIES_SUCCESS,
} from "redux/constant";

const initialState = fromJS({
  data: [],
  loading: false,
});

export default function mines(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES: {
      return state.set('loading', true).set('data', fromJS([]));
    }

    case GET_CITIES_FAILED: {
      return state.set('loading', false).set('data', fromJS([]));
    }

    case GET_CITIES_SUCCESS: {
      return state.set('loading', false).set('data', fromJS(action.data));
    }

    default:
      return state;
  }
}
