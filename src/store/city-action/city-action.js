import {cityOffers} from '../../mocks/offers.js';

const SortType = {
  POPULAR: `popular`,
  HIGH: `to-high`,
  LOW: `to-low`,
  RATED: `top-rated`,
};

const SortingFunction = {
  [SortType.HIGH]: (a, b) => b.price - a.price,
  [SortType.LOW]: (a, b) => a.price - b.price,
  [SortType.RATED]: (a, b) => b.ratingStars - a.ratingStars,
};

export const getSortedOffers = (offersActive, sortType, offersOriginal) => {
  let sortedOffers = [];
  const showingOffers = offersActive.slice();

  if (sortType === SortType.POPULAR) {
    return offersOriginal;
  }

  sortedOffers = showingOffers.sort(SortingFunction[sortType]);

  return sortedOffers;
};

export const getOffersActive = (city) => {
  return cityOffers.find((cityOffer) => cityOffer.cityName === city);
};

export const getOfferId = (offer) => {
  if (offer) {
    return offer.id;
  }

  return null;
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  PLACE_TITLE_CLICK: `PLACE_TITLE_CLICK`,
  SORTING_OFFERS_CHANGE: `SORTING_OFFERS_CHANGE`,
  CHANGE_PIN_MAP_HOVER_CARD: `CHANGE_PIN_MAP_HOVER_CARD`,
};

export const ActionCreator = {
  actionCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: getOffersActive(city),
  }),

  actionTitleClick: (offer) => ({
    type: ActionType.PLACE_TITLE_CLICK,
    payload: offer,
  }),

  actionSortingOffersChange: (sortType, offersActive, offersOriginal) => ({
    type: ActionType.SORTING_OFFERS_CHANGE,
    payload: {
      sortType,
      offersActive: getSortedOffers(offersActive, sortType, offersOriginal),
    }
  }),

  actionChangePinMapHoverCard: (offer) => ({
    type: ActionType.CHANGE_PIN_MAP_HOVER_CARD,
    payload: getOfferId(offer),
  })
};
