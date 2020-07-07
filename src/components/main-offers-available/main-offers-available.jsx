import React from 'react';

import {PlacesList} from "../places-list/places-list.jsx";
import {MapCities} from '../map-cities/map-cities.jsx';
import {WrapperSortOffers} from '../sort-offers/sort-offers.jsx';

import {propsTypeAll} from "../../propsType/propsType.js";

export const MainOffersAvailable = ({placesCount, cityActive, offers, onTitlePlaceClick, cityCoordinates}) => {

  const cityMap = `city`;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {cityActive}</b>

        <WrapperSortOffers
        />

        <div className="cities__places-list places__list tabs__content">
          <PlacesList
            offers={offers}
            onTitlePlaceClick={onTitlePlaceClick}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapCities
            offers={offers}
            idPlace={cityMap}
            cityCoordinates={cityCoordinates}
          />
        </section>
      </div>
    </div>
  );
};

MainOffersAvailable.propTypes = {
  placesCount: propsTypeAll.placesCount,
  cityActive: propsTypeAll.cityActive,
  offers: propsTypeAll.offers,
  onTitlePlaceClick: propsTypeAll.onTitlePlaceClick,
  cityCoordinates: propsTypeAll.cityCoordinates,
};
