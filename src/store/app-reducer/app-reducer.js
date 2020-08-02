import {extend} from '../../utils/utils.js';
import {ActionTypeApp, ActionCreatorApp} from '../app-action/app-action.js';
import {adapterComment} from '../../adapter/adapterComments.js';

const initialState = {
  placeOffer: null,
  offerId: null,
};

export const OperationApp = {
  loadComments: (offer) => (dispatch, getState, api) => {
    return api.get(`/comments/${offer.id}`)
      .then((response) => {
        return adapterComment(response.data);
      })
      .then((comments) => {
        dispatch(ActionCreatorApp.actionTitleClick(offer, comments));
      });
  },
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
