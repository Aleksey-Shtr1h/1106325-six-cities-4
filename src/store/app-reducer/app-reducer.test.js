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
    pageApp: `main`,
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
    pageApp: `property`,
  });
});

it(`Reducer should set offerId in Map component`, () => {
  expect(appReducer({
  }, {
    type: ActionTypeApp.CHANGE_PIN_MAP_HOVER_CARD,
    payload: getOfferId(null),
  })).toEqual({
    offerId: null,
  });
});

it(`Reducer should set offerId in Map component`, () => {
  expect(appReducer({
  }, {
    type: ActionTypeApp.GET_SIGN_IN_PAGE,
    payload: `login`,
  })).toEqual({
    pageApp: `login`,
  });
});

it(`Reducer should set offerId in Map component`, () => {
  expect(appReducer({
  }, {
    type: ActionTypeApp.GET_MAIN_PAGE,
    payload: `main`,
  })).toEqual({
    pageApp: `main`,
  });
});
