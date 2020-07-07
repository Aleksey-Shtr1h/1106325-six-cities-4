import React from 'react';

import {PlacesList} from "../places-list/places-list.jsx";
import {MapCities} from '../map-cities/map-cities.jsx';

import {propsTypeAll} from "../../propsType/propsType.js";

const testFoo = (value) => {
  console.log(value);
}

export const MainOffersAvailable = ({placesCount, cityActive, offers, onTitlePlaceClick, cityCoordinates}) => {

  const cityMap = `city`;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {cityActive}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>

          {/*
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>

          <select defaultValue={"B"}>
            <option>{"A"}</option>
            <option>{"B"}</option>
            <option>{"C"}</option>

          </select>

          */}

          <select
            className="places__sorting-type"
            id="places-sorting"
            value={`popular`}
            onChange={(evt) => testFoo(evt.target.value)}
          >
            <option className="places__option" value="popular">
              Popular
            </option>

            <option className="places__option" value="to-high">
              Price: low to high
            </option>

            <option className="places__option" value="to-low">
              Price: high to low
            </option>

            <option className="places__option" value="top-rated">
              Top rated first
            </option>

          </select>


        </form>
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
