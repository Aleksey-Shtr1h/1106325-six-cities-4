import {PageApp} from '../../constans.js';

export const getOfferId = (offer) => {
  if (offer) {
    return offer.id;
  }

  return null;
};

export const getCommentsOffer = (offer, comments) => {
  offer.reviews = comments;

  return offer;
};

export const ActionTypeApp = {
  PLACE_TITLE_CLICK: `PLACE_TITLE_CLICK`,
  CHANGE_PIN_MAP_HOVER_CARD: `CHANGE_PIN_MAP_HOVER_CARD`,
  GET_SIGN_IN_PAGE: `GET_SIGN_IN_PAGE`,
  GET_MAIN_PAGE: `GET_MAIN_PAGE`,
};

export const ActionCreatorApp = {

  actionTitleClick: (offer, comments) => ({
    type: ActionTypeApp.PLACE_TITLE_CLICK,
    payload: getCommentsOffer(offer, comments),
  }),

  actionChangePinMapHoverCard: (offer) => ({
    type: ActionTypeApp.CHANGE_PIN_MAP_HOVER_CARD,
    payload: getOfferId(offer),
  }),

  actionGetSignInPage: () => ({
      type: ActionTypeApp.GET_SIGN_IN_PAGE,
      payload: PageApp.LOGIN,
    }),
  actionGetMainPage: () => ({
      type: ActionTypeApp.GET_MAIN_PAGE,
      payload: PageApp.MAIN,
    }),
};
