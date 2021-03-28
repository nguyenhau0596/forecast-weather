export function getForecastByDays(forecastData, dayNumber) {
  if (!forecastData || !Array.isArray(forecastData.consolidated_weather)) {
    return [];
  }

  const allData = forecastData.consolidated_weather.sort((a, b) => a.applicable_date.localeCompare(b.applicable_date));
  if (allData.length < dayNumber) {
    return allData;
  }
  return allData.slice(0, dayNumber);
}
