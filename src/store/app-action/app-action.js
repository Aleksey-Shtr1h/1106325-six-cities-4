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

  GET_PAGE: `GET_PAGE`,

  CHANGE_RATING_PLACE: `CHANGE_RATING_PLACE`,
  CHANGE_COMMENT_PLACE: `CHANGE_COMMENT_PLACE`,
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

  actionGetPage: (pageType) => ({
    type: ActionTypeApp.GET_PAGE,
    payload: pageType,
  }),

  actionPage: (page) => ({
    type: ActionTypeApp.GET_PAGE,
    payload: page,
  }),

  actionChangeRatingPlace: (rating) => ({
    type: ActionTypeApp.CHANGE_RATING_PLACE,
    payload: rating,
  }),

  actionChangeCommentPlace: (comment) => ({
    type: ActionTypeApp.CHANGE_COMMENT_PLACE,
    payload: comment,
  }),

};
