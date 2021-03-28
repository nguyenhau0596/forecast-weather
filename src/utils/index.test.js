import { getForecastByDays } from './index';

describe('Test getForecastByDays', () => {
  test('return empty when input is null', () => {
    const result = getForecastByDays(null, 2);
    expect(result.length).toEqual(0);
  });

  test('return empty when forecast list is not array', () => {
    const forecast = {
      consolidated_weather: {},
    };
    const result = getForecastByDays(forecast, 2);
    expect(result.length).toEqual(0);
  });

  test('return forecast list when array length < day number', () => {
    const forecast = {
      consolidated_weather: [
        {
          id: 1,
          applicable_date: '2021/02/03',
        },
        {
          id: 2,
          applicable_date: '2021/02/03',
        },
        {
          id: 3,
          applicable_date: '2021/03/03',
        },
      ],
    };
    const result = getForecastByDays(forecast, 4);
    expect(result.length).toEqual(3);
  });

  test('return number of forecasts when array length > day number', () => {
    const forecast = {
      consolidated_weather: [
        {
          id: 1,
          applicable_date: '2021/02/03',
        },
        {
          id: 2,
          applicable_date: '2021/02/03',
        },
        {
          id: 3,
          applicable_date: '2021/03/03',
        },
      ],
    };
    const result = getForecastByDays(forecast, 2);
    expect(result.length).toEqual(2);
  });
})
