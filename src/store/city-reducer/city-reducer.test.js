import {cityReducer} from './city-reducer.js';
import {cities, cityOffers as cityOffersTest} from '../../mocks/offers.js';
import {ActionType} from '../city-action/city-action.js';

const getOffersActive = (city) => {
  return cityOffersTest.find((cityOffer) => cityOffer.cityName === city);
};

// import {cities} from '../../mocks/offers.js';
// import {testProps} from '../../test/offersProps.js';
const nameCities = cities;
const cityOffers = cityOffersTest[0];
const cityActive = cityOffersTest[0].cityName;
const placeOffer = null;
const placeOfferActive = cityOffersTest[0].offers[0];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(cityReducer(void 0, {})).toEqual({
    nameCities,
    cityOffers,
    cityActive,
    placeOffer,
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
