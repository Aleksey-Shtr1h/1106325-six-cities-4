import React from "react";

import {MainOffersAvailable} from '../main-offers-available/main-offers-available.jsx';
import {MainOffersNotAvailable} from '../main-offers-not-available/main-offers-not-available.js';

import {WrapperCitiesList} from '../cities-list/cities-list.jsx';

import {propsTypeAll} from "../../propsType/propsType.js";

export const Main = ({placesCount, offers, cityActive, cityCoordinates}) => {

  return (

    <main className={`page__main page__main--index ${offers.length !== 0 && `` || `page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <WrapperCitiesList
            cityActive={cityActive}
          />
        </section>
      </div>


      <div className="cities">

        {offers.length !== 0 &&
          <MainOffersAvailable
            placesCount={placesCount}
            offers={offers}
            cityActive={cityActive}
            cityCoordinates={cityCoordinates}
          /> ||
          <MainOffersNotAvailable
          />
        }

      </div>
    </main>

  );
};

Main.propTypes = {
  placesCount: propsTypeAll.placesCount,
  offers: propsTypeAll.offers,
  cityActive: propsTypeAll.cityActive,
  cityCoordinates: propsTypeAll.cityCoordinates,
};
