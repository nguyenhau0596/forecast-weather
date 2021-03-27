import axios from 'axios';

const host = 'https://www.metaweather.com/api';

export default class MetaWeatherService {
  fetchCities = (query) => {
    return axios({
      url: `${host}/location/search/`,
      method: 'GET',
      params: {
        query,
      },
    });
  }
}
