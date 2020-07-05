import {cityOffers} from '../../mocks/offers.js';

const getOffersActive = (city) => {
  return cityOffers.find((cityOffer) => cityOffer.cityName === city);
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  PLACE_TITLE_CLICK: `PLACE_TITLE_CLICK`,
};

export const ActionCreator = {
  actionCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: getOffersActive(city),
  }),

  actionTitleClick: (offer) => ({
    type: ActionType.PLACE_TITLE_CLICK,
    payload: offer,
  })
};
