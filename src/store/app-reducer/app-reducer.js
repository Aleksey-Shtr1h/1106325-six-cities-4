import {extend} from '../../utils/utils.js';
import {ActionTypeApp, ActionCreatorApp} from '../app-action/app-action.js';
import {adapterComment} from '../../adapter/adapterComments.js';
import {PageApp} from '../../constans.js';

const initialState = {
  placeOffer: null,
  offerId: null,
  pageApp: PageApp.MAIN,

  rating: 0,
  comment: ``,
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

  postComments: (rating, comment) => (dispatch, getState, api) => {

    const idOffer = getState().APP.placeOffer.id;

    return api.post(`/comments/${idOffer}`, {
      "rating": rating,
      "comment": comment,
    });
    // .then(() => {
    //   dispatch(ActionCreatorUser.getEmail(authData.login));
    //   dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.AUTH));
    // })
    // .catch((err) => {

    // });
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

  }

  return state;
};
