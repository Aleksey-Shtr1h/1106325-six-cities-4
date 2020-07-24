import {extend} from '../../utils/utils.js';
import {ActionTypeApp} from '../app-action/app-action.js';

const initialState = {
  placeOffer: null,
  offerId: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeApp.PLACE_TITLE_CLICK:
      return extend(state, {
        placeOffer: action.payload,
      });

    case ActionTypeApp.CHANGE_PIN_MAP_HOVER_CARD:
      return extend(state, {
        offerId: action.payload,
      });
  }

  return state;
};
