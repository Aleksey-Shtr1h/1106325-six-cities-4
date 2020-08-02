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

};
