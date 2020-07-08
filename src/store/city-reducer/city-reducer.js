import {cities, cityOffers} from '../../mocks/offers.js';
import {extend} from '../../utils/utils.js';
import {ActionType} from '../city-action/city-action.js';

const initialState = {
  nameCities: cities,
  cityOffers: cityOffers[0],
  cityActive: cityOffers[0].cityName,
  placeOffer: null,
  activeSort: `popular`,
  offersActive: cityOffers[0].offers,
  offerId: null,
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {
        cityOffers: action.payload,
        cityActive: action.payload.cityName,
        offersActive: action.payload.offers,
        activeSort: `popular`,
      });

    case ActionType.PLACE_TITLE_CLICK:
      return extend(state, {
        placeOffer: action.payload,
      });

    case ActionType.SORTING_OFFERS_CHANGE:
      return extend(state, {
        activeSort: action.payload.sortType,
        offersActive: action.payload.offersActive,
      });

    case ActionType.CHANGE_PIN_MAP_HOVER_CARD:
      return extend(state, {
        offerId: action.payload,
      });
  }

  return state;
};
