import {appReducer} from './app-reducer.js';
import {ActionTypeApp} from '../app-action/app-action.js';
import {getOfferId} from '../app-action/app-action.js';
import {testProps} from '../../test/offersProps.js';

const placeOffer = null;
const placeOfferActive = testProps.cityOffersArrayProps[0].offers[0];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appReducer(void 0, {})).toEqual({
    placeOffer: null,
    offerId: null,
  });
});

it(`Reducer should set in property null and active offer`, () => {
  expect(appReducer({
    placeOffer,
  }, {
    type: ActionTypeApp.PLACE_TITLE_CLICK,
    payload: placeOfferActive,
  })).toEqual({
    placeOffer: placeOfferActive,
  });
});

it(`Reducer should set 4`, () => {
  expect(appReducer({
  }, {
    type: ActionTypeApp.CHANGE_PIN_MAP_HOVER_CARD,
    payload: getOfferId(null),
  })).toEqual({
    offerId: null,
  });
});
