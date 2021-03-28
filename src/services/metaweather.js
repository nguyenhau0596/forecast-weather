import axios from 'axios';

console.log('process.env.REACT_APP_METAWEATHER_HOST ', process.env.REACT_APP_METAWEATHER_HOST);

const host = process.env.REACT_APP_METAWEATHER_HOST || 'http://localhost:8080';

export default class MetaWeatherService {
  fetchCities = (query) => {
    return axios({
      url: `${host}/api/location/search/`,
      method: 'GET',
      params: {
        query,
      },
    });
  }

  fetchForecast = (id) => {
    return axios({
      url: `${host}/api/location/${id}/`,
      method: 'GET',
    });
  }
}
