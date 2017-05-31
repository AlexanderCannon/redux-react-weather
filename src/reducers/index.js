import { combineReducers } from 'redux';
import WeatherReducer from './Weather.js';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
