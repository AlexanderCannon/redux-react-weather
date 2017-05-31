import axios from 'axios';

const WEATHER_API_KEY = 'a4b861ff63726f3de387a1a3c13cfdf7';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;
//convention to make action type more consistent
//todo consider refactoring to use Konfig or something similar
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROUTE_URL}&q=${city},gb`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};