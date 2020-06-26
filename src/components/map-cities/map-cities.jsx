import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

// import {propsTypeOffer} from "../../propsType/propsType.js";

export class MapCities extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const {offers} = this.props;

    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    map.setView(city, zoom);


    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    // const coordinates = [
    //   [52.3909553943508, 4.85309666406198],
    //   [52.369553943508, 4.85309666406198],
    //   [52.3909553943508, 4.929309666406198],
    //   [52.3809553943508, 4.939309666406198]
    // ];

    // coordinates.forEach((coordinate) => {
    //   leaflet
    //     .marker(coordinate, {icon})
    //     .addTo(map);
    // });

    const {locationsCoords} = this.props;

    locationsCoords.forEach((offerCoords) => {
      leaflet
        .marker(offerCoords, {icon})
        .addTo(map);
    });

  }


  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

MapCities.propTypes = {
  locationsCoords: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired)
  ).isRequired,
};
