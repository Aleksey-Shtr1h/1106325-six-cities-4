import {history} from '../../history';
import {AppRoute} from '../../constans.js';

import {extend} from '../../utils/utils.js';
import {ActionTypeData, ActionCreatorData} from '../data-action/data-action.js';
import {ActionCreatorUser} from '../user-action/user-action.js';

import {adapterOffers} from '../../adapter/adapter.js';

const initialState = {
  citiesAll: null,
  nameCities: null,
  cityOffers: null,
  cityActive: null,
  offersActive: null,
  activeSort: `popular`,
  nearbyOffers: null,
  nearbyCity: null,

  favoritePlaces: null,
};

export const OperationData = {
  loadCitiesOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        return adapterOffers(response.data);
      })
      .then((adapter) => {
        dispatch(ActionCreatorData.loadCitiesAll(adapter.cityOffers));
        dispatch(ActionCreatorData.loadCitiesName(adapter.cities));
        dispatch(ActionCreatorData.loadCityActive(adapter.cityOffers[0].cityName));
        dispatch(ActionCreatorData.loadOffersActive(adapter.cityOffers));
        dispatch(ActionCreatorData.loadCitiesOffers(adapter.cityOffers[0]));
      });
  },

  loadNearbyOffers: (offer) => (dispatch, getState, api) => {
    const id = offer.id;

    dispatch(ActionCreatorData.loadNearbyOffers({offers: null}));
    return api.get(`/hotels/${id}/nearby`)
    .then((response) => {
      return adapterOffers(response.data);
    })
    .then((adapter) => {
      dispatch(ActionCreatorData.loadNearbyOffers(adapter.cityOffers[0]));
      dispatch(ActionCreatorData.loadNearbyCities(adapter.cities));
    });
  },

  loadFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      return adapterOffers(response.data);
    })
    .then((adapter) => {
      dispatch(ActionCreatorData.loadFavoritePlaces(adapter.cityOffers));
    });
  },

  postFavorite: (offer, cityActive, citiesAll, nearbyOffers = null) => (dispatch, getState, api) => {
    const id = offer.id;
    const activeFavorite = offer.isFavorite;
    const status = activeFavorite ? 0 : 1;

    return api.post(`/favorite/${id}/${status}`)
    .then((response) => {
      return adapterOffers([response.data]);
    })
    .then(() => {
      citiesAll.forEach((city) => {
        if (cityActive === city.cityName) {
          city.offers.forEach((offerState) => {
            if (id === offerState.id) {
              offerState.isFavorite = !activeFavorite;
            }
          });
        }
      });

      dispatch(ActionCreatorData.loadCitiesAll(citiesAll.slice()));
    })
    .then(() => {
      if (nearbyOffers) {
        [nearbyOffers].forEach((city) => {
          if (cityActive === city.cityName) {
            city.offers.forEach((offerState) => {
              if (id === offerState.id) {
                offerState.isFavorite = !activeFavorite;
              }
            });
          }
        });
      }

      offer.isFavorite = !activeFavorite;

      dispatch(ActionCreatorData.loadNearbyOffers(nearbyOffers));
      dispatch(OperationData.loadFavorite());
    })
    .catch((err) => {
      history.push(`${AppRoute.LOGIN}`);
      dispatch(ActionCreatorUser.getError(err.request));
    });
  },

};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.CHANGE_CITY:
      return extend(state, {
        cityOffers: action.payload,
        cityActive: action.payload.cityName,
        offersActive: action.payload.offers,
        activeSort: `popular`,
      });

    case ActionTypeData.SORTING_OFFERS_CHANGE:
      return extend(state, {
        activeSort: action.payload.sortType,
        offersActive: action.payload.offersActive,
      });

    case ActionTypeData.LOAD_CITIES_OFFERS:
      return extend(state, {
        cityOffers: action.payload,
      });

    case ActionTypeData.LOAD_CITIES_NAME:
      return extend(state, {
        nameCities: action.payload,
      });

    case ActionTypeData.LOAD_CITY_ACTIVE:
      return extend(state, {
        cityActive: action.payload,
      });

    case ActionTypeData.LOAD_OFFERS_ACTIVE:
      return extend(state, {
        offersActive: action.payload,
      });

    case ActionTypeData.LOAD_CITIES_ALL:
      return extend(state, {
        citiesAll: action.payload,
      });

    case ActionTypeData.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
      });

    case ActionTypeData.LOAD_NEARBY_CITIES:
      return extend(state, {
        nearbyCity: action.payload,
      });

    case ActionTypeData.LOAD_FAVORITE_PLACES:
      return extend(state, {
        favoritePlaces: action.payload,
      });
  }

  return state;
};
