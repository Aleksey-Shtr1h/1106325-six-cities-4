import {cityReducer} from './city-reducer.js';
import {cities, cityOffers as cityOffersTest} from '../../mocks/offers.js';
import {ActionType} from '../city-action/city-action.js';

import {getOffersActive, getSortedOffers, getOfferId} from '../city-action/city-action.js';

const nameCities = cities;
const cityOffers = cityOffersTest[0];
const cityActive = cityOffersTest[0].cityName;
const placeOffer = null;
const placeOfferActive = cityOffersTest[0].offers[0];
const offersActive = cityOffersTest[0].offers;
const offersOriginal = cityOffersTest[0].offers;
const offerId = null;
const activeSort = `popular`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(cityReducer(void 0, {})).toEqual({
    nameCities,
    cityOffers,
    cityActive,
    placeOffer,
    activeSort: `popular`,
    offersActive,
    offerId,
  });
});

it(`Reducer should set active city and active offer`, () => {
  expect(cityReducer({
    cityActive,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: getOffersActive(cityActive),
  })).toEqual({
    cityOffers,
    cityActive,
    offersActive,
    activeSort: `popular`,
  });
});

it(`Reducer should set in property null and active offer`, () => {
  expect(cityReducer({
    placeOffer,
  }, {
    type: ActionType.PLACE_TITLE_CLICK,
    payload: placeOfferActive,
  })).toEqual({
    placeOffer: placeOfferActive,
  });
});

it(`Reducer should set 3`, () => {
  expect(cityReducer({
    activeSort,
    offersActive,
  }, {
    type: ActionType.SORTING_OFFERS_CHANGE,
    payload: {
      sortType: activeSort,
      offersActive: getSortedOffers(offersActive, activeSort, offersOriginal),
    }
  })).toEqual({
    activeSort,
    offersActive,
  });
});

it(`Reducer should set 4`, () => {
  expect(cityReducer({
  }, {
    type: ActionType.CHANGE_PIN_MAP_HOVER_CARD,
    payload: getOfferId(null),
  })).toEqual({
    offerId: null,
  });
});
