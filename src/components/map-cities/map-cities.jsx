import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {propsTypeAll} from "../../propsType/propsType.js";

const getMapPlace = (offers, idPlace) => {
  const place = [];
  offers.map((offer) => {
    if (offer.id !== idPlace) {
      place.push(offer);
    }
  });
  return place;
};

const getCenterMap = (centerCity, offers, idPlace) => {
  let center = centerCity;
  if (idPlace !== `city`) {
    const offerActive = offers.find((offer) => offer.id === idPlace);
    center = offerActive.coordinates;
  }
  return center;
};

export class MapCities extends React.PureComponent {
  constructor(props) {
    super(props);

    this._zoom = 12;

    this._centerCity = null;
    this._mapPlaces = null;
    this._city = null;

    this._map = null;
    this._icon = null;
    this._pins = [];
  }

  componentDidMount() {
    this._centerCity = this.props.cityCoordinates;
    this._mapPlaces = getMapPlace(this.props.offers, this.props.idPlace);

    this._city = getCenterMap(this._centerCity, this.props.offers, this.props.idPlace);

    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: true,
      marker: true,
    });

    this._map.setView(this._city, this._zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._getPinsMap();
  }

  componentDidUpdate() {
    this._centerCity = this.props.cityCoordinates;
    this._city = getCenterMap(this._centerCity, this.props.offers, this.props.idPlace);

    this._mapPlaces = getMapPlace(this.props.offers, this.props.idPlace);

    this._map.setView(this._city, this._zoom);

    this._removePinsMap();
    this._getPinsMap();
  }

  _getPinsMap() {
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    this._pins = this._mapPlaces.map((mapPlace) => {
      return leaflet
        .marker(mapPlace.coordinates, {icon: this._icon})
        .addTo(this._map);
    });

    if (this.props.idPlace !== `city`) {
      const offerActive = this.props.offers.find((offer) => offer.id === this.props.idPlace);

      const iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30],
      });

      const pinActive = leaflet
        .marker(offerActive.coordinates, {iconActive})
        .addTo(this._map);

      this._pins.push(pinActive);
    }
  }

  _removePinsMap() {
    this._pins.forEach((pin) => {
      this._map.removeLayer(pin);
    });
  }


  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

MapCities.propTypes = {
  offers: propsTypeAll.offers,
  idPlace: PropTypes.string.isRequired,
  cityCoordinates: propsTypeAll.cityCoordinates,
};
