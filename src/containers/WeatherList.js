import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  constructor(props) {
    super(props)

    // this.createDataArray = this.createDataArray.bind(this)
  }
  renderWeather(cityData) {
    const { name, coord } = cityData.city;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humitities = cityData.list.map(weather => weather.main.humidity);

    return (<tr key={name}>
      <td><GoogleMap lon={coord.lon} lat={coord.lat} /></td>
      <td><Chart data={temps} color='red' units="°" /></td>
      <td><Chart data={pressures} color='blue' units=" hPa" /></td>
      <td><Chart data={humitities} color='green' units="%" /></td>
    </tr>);
  }

  createDataArray(data, type) {
    return cityData.list.map(weather => weather.main[type]);
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (°)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  };
};

function mapStateToProps({ weather }) {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);