import {cityOffers} from '../../mocks/offers.js';

const getOffersActive = (city) => {
  return cityOffers.find((cityOffer) => cityOffer.cityName === city);
};

const SortType = {
  POPULAR: `popular`,
  LOW: `to-low`,
  RATED: `top-rated`,
  HIGH: `to-high`,
};

const SortingFunction = {
  [SortType.HIGH]: (a, b) => b.price - a.price,
  [SortType.LOW]: (a, b) => a.price - b.price,
};

const getSortedOffers = (sortOffers, sortType) => {

  sortOffers.offers.sort(SortingFunction[sortType]);

  return sortOffers;
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  PLACE_TITLE_CLICK: `PLACE_TITLE_CLICK`,
  SORTING_OFFERS_CHANGE: `SORTING_OFFERS_CHANGE`,
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

  actionSortingOffersChange: (sortType, sortOffers) => ({
    type: ActionType.SORTING_OFFERS_CHANGE,
    payload: {
      sortType,
      sortOffers: getSortedOffers(sortOffers, sortType),
    }
  })
};
