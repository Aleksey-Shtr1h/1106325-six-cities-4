import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {propsTypeOffer} from "../../propsType/propsType.js";

const getMapPlace = (offers, idPlace) => {
  const place = [];
  offers.map((offer) => {
    if (offer.id !== idPlace) {
      place.push(offer);
    }
  });
  return place;
};

const geyCenterMap = (centerCity, offers, idPlace) => {
  let center = centerCity;
  if (idPlace !== `city`) {
    const arr = offers.find((offer) => offer.id === idPlace);
    center = arr.coordinates;
  }
  return center;
};

export class MapCities extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const {idPlace} = this.props;
    const centerCity = [52.38333, 4.9];

    const mapPlaces = getMapPlace(offers, idPlace);

    const city = geyCenterMap(centerCity, offers, idPlace);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: true,
      marker: true,
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    mapPlaces.forEach((mapPlace) => {
      leaflet
        .marker(mapPlace.coordinates, {icon})
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
  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),
  idPlace: PropTypes.string.isRequired,
};
