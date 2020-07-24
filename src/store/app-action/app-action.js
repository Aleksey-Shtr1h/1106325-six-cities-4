export const getOfferId = (offer) => {
  if (offer) {
    return offer.id;
  }

  return null;
};

export const ActionTypeApp = {
  PLACE_TITLE_CLICK: `PLACE_TITLE_CLICK`,
  CHANGE_PIN_MAP_HOVER_CARD: `CHANGE_PIN_MAP_HOVER_CARD`,
};

export const ActionCreatorApp = {

  actionTitleClick: (offer) => ({
    type: ActionTypeApp.PLACE_TITLE_CLICK,
    payload: offer,
  }),

  actionChangePinMapHoverCard: (offer) => ({
    type: ActionTypeApp.CHANGE_PIN_MAP_HOVER_CARD,
    payload: getOfferId(offer),
  }),

};
