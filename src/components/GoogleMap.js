import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    var myLatlng = new google.maps.LatLng(this.props.lat, this.props.lon);
    var mapOptions = {
      zoom: 12,
      center: myLatlng
      //mapTypeId: 'satellite'
    };
    var map = new google.maps.Map(this.refs.map, mapOptions);
  }
  render() {
    return (<div ref="map" />
    );
  }
}

export default GoogleMap;