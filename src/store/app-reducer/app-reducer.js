import {extend} from '../../utils/utils.js';
import {ActionTypeApp, ActionCreatorApp} from '../app-action/app-action.js';
import {ActionCreatorUser} from '../user-action/user-action.js';

import {adapterComment} from '../../adapter/adapterComments.js';
import {PageApp} from '../../constans.js';

const initialState = {
  placeOffer: null,
  offerId: null,
  pageApp: PageApp.MAIN,
  rating: 0,
  comment: ``,
  activeForm: false,
};

export const OperationApp = {
  loadComments: (offer) => (dispatch, getState, api) => {
    return api.get(`/comments/${offer.id}`)
      .then((response) => {
        return adapterComment(response.data);
      })
      .then((comments) => {
        dispatch(ActionCreatorApp.actionTitleClick(offer, comments));
      })
      .catch((err) => {
        dispatch(ActionCreatorUser.getError(err.request));
      });
  },

  postComments: (rating, comment) => (dispatch, getState, api) => {

    const idOffer = getState().APP.placeOffer.id;
    const offer = getState().APP.placeOffer;
    dispatch(ActionCreatorApp.actionDisabledForm(true));

    return api.post(`/comments/${idOffer}`, {
      'rating': rating,
      'comment': comment,
    })
    .then((response) => {
      dispatch(ActionCreatorApp.actionResetForm());
      return adapterComment(response.data);
    })
    .then((comments) => {
      dispatch(ActionCreatorApp.actionTitleClick(offer, comments));
      dispatch(ActionCreatorApp.actionDisabledForm(false));
    })
    .catch((err) => {
      dispatch(ActionCreatorUser.getError(err.request));
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

    case ActionTypeApp.GET_PAGE:
      return extend(state, {
        pageApp: action.payload,
        rating: 0,
        comment: ``,
      });

    case ActionTypeApp.CHANGE_RATING_PLACE:
      return extend(state, {
        rating: action.payload,
      });

    case ActionTypeApp.CHANGE_COMMENT_PLACE:
      return extend(state, {
        comment: action.payload,
      });

    case ActionTypeApp.DISABLED_FORM:
      return extend(state, {
        activeForm: action.payload,
      });

    case ActionTypeApp.RESET_FORM:
      return extend(state, {
        rating: action.payload.rating,
        comment: action.payload.comment,
      });

  }

  return state;
};
