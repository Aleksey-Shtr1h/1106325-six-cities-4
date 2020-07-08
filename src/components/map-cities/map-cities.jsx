import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';

import {propsTypeAll} from "../../propsType/propsType.js";

const PIN_SRANDART_URL = `img/pin.svg`;
const PIN_ACTIVE_URL = `img/pin-active.svg`;
const PIN_SIZE = [30, 30];

const getPinStyle = (url, size) => {
  return leaflet.icon({
    iconUrl: url,
    iconSize: size,
  });
};

const getPinMarker = (coordinates, iconStyle, map) => {
  return leaflet
    .marker(coordinates, {icon: iconStyle})
    .addTo(map);
};


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

    this._pins = [];
  }


  componentDidMount() {
    // console.log(this.props.offerId);
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
    const offerId = this.props.offerId;
    const placeId = this.props.idPlace;

    this._centerCity = this.props.cityCoordinates;
    this._city = getCenterMap(this._centerCity, this.props.offers, this.props.idPlace);

    this._map.setView(this._city, this._zoom);

    this._removePinsMap();

    if (offerId === placeId) {
      this._getPinsMap(placeId);
    } else if (offerId !== null) {
      this._getPinsMap(offerId);
    } else {
      this._getPinsMap(placeId);
    }
  }

  _getPinsMap(id) {
    const iconPin = getPinStyle(PIN_SRANDART_URL, PIN_SIZE);

    this._mapPlaces = getMapPlace(this.props.offers, id);

    this._pins = this._mapPlaces.map((mapPlace) => {
      return getPinMarker(mapPlace.coordinates, iconPin, this._map);
    });

    this._updatePinMap(id);

  }

  _updatePinMap(idActive) {
    const idCard = idActive === undefined ? this.props.idPlace : idActive;

    const offerActive = this.props.offers.find((offer) => offer.id === idCard);

    if (offerActive) {
      const iconActive = getPinStyle(PIN_ACTIVE_URL, PIN_SIZE);

      getPinMarker(offerActive.coordinates, iconActive, this._map);
    }
  }

  _removePinsMap() {
    const pins = document.querySelectorAll(`.leaflet-pane .leaflet-marker-icon`);

    pins.forEach((pin) => {
      pin.remove();
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offerId: state.offerId,
  };
};

export const WrapperMapCities = connect(mapStateToProps)(MapCities);

MapCities.propTypes = {
  offers: propsTypeAll.offers,
  idPlace: PropTypes.string.isRequired,
  cityCoordinates: propsTypeAll.cityCoordinates,
  offerId: propsTypeAll.stringAndNull,
};
