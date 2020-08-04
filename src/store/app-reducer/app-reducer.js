import {extend} from '../../utils/utils.js';
import {ActionTypeApp, ActionCreatorApp} from '../app-action/app-action.js';
import {adapterComment} from '../../adapter/adapterComments.js';
import {PageApp} from '../../constans.js';

const initialState = {
  placeOffer: null,
  offerId: null,
  pageApp: PageApp.MAIN,
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
        pageApp: PageApp.PROPERTY,
      });

    case ActionTypeApp.CHANGE_PIN_MAP_HOVER_CARD:
      return extend(state, {
        offerId: action.payload,
      });

    case ActionTypeApp.GET_SIGN_IN_PAGE:
      return extend(state, {
        pageApp: action.payload,
      });

    case ActionTypeApp.GET_MAIN_PAGE:
      return extend(state, {
        pageApp: action.payload,
      });
  }

  return state;
};
