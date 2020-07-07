import {cities, cityOffers} from '../../mocks/offers.js';
import {extend} from '../../utils/utils.js';
import {ActionType} from '../city-action/city-action.js';

const initialState = {
  nameCities: cities,
  cityOffers: cityOffers[0],
  cityActive: cityOffers[0].cityName,
  placeOffer: null,
  avtiveSort: `popular`,
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {
        cityOffers: action.payload,
        cityActive: action.payload.cityName,
      });

    case ActionType.PLACE_TITLE_CLICK:
      return extend(state, {
        placeOffer: action.payload,
      });

    case ActionType.SORTING_OFFERS_CHANGE:
      return extend(state, {
        avtiveSort: action.payload.sortType,
        cityOffers: action.payload.sortOffers,
      });
  }
  return state;
};
