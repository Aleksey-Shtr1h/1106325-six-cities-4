import {createSelector} from 'reselect';
import {NameSpace} from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

export const getCityOffers = (state) => {
  return state[NAME_SPACE].cityOffers;
};

export const getCityActive = (state) => {
  return state[NAME_SPACE].cityActive;
};

export const getOffersActive = (state) => {
  return state[NAME_SPACE].offersActive;
};

export const getCitiesAll = (state) => {
  return state[NAME_SPACE].citiesAll;
};

export const getNameCities = (state) => {
  return state[NAME_SPACE].nameCities;
};

export const getActiveSort = (state) => {
  return state[NAME_SPACE].activeSort;
};

export const getNearbyOffers = (state) => {
  return state[NAME_SPACE].nearbyOffers;
};

export const getChangeCity = createSelector(
    getCityOffers,
    getCityActive,
    getOffersActive,
    getCitiesAll,
    (cityOffers, cityActive, cityOffersActive, citiesAll) => {
      if (!(cityOffers && cityActive && cityOffersActive && citiesAll)) {
        return null;
      }

      return citiesAll.find((cityOffer) => cityOffer.cityName === cityActive);
    }
);

