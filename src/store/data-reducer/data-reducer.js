import {extend} from '../../utils/utils.js';
import {adapterOffers} from '../../adapter/adapter.js';

const initialState = {
  nameCities: [],
  cityOffers: {},
  cityActive: ``,
  placeOffer: null,

  activeSort: `popular`,
  offerId: null,
  offersActive: [],
};

export const ActionTypeData = {
  LOAD_CITIES_OFFERS: `LOAD_CITIES_OFFERS`,
  LOAD_CITIES_NAME: `LOAD_CITIES_NAME`,
  LOAD_CITY_ACTIVE: `LOAD_CITY_ACTIVE`,
  LOAD_OFFERS_ACTIVE: `LOAD_OFFERS_ACTIVE`,
};

export const ActionCreatorData = {
  loadCitiesOffers: (citiesOffers) => {
    return {
      type: ActionTypeData.LOAD_CITIES_OFFERS,
      payload: citiesOffers,
    };
  },

  loadCitiesName: (citiesName) => {
    return {
      type: ActionTypeData.LOAD_CITIES_NAME,
      payload: citiesName,
    };
  },

  loadCityActive: (citiesOffers) => {
    return {
      type: ActionTypeData.LOAD_CITY_ACTIVE,
      payload: citiesOffers[0].cityName,
    };
  },

  loadOffersActive: (citiesOffers) => {
    return {
      type: ActionTypeData.LOAD_OFFERS_ACTIVE,
      payload: citiesOffers[0].offers,
    };
  },
};

export const OperationData = {
  loadCitiesOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const adapterData = adapterOffers(response.data);
        dispatch(ActionCreatorData.loadCitiesOffers(adapterData.cityOffers[0]));
        dispatch(ActionCreatorData.loadCitiesName(adapterData.cities));
        dispatch(ActionCreatorData.loadCityActive(adapterData.cityOffers));
        dispatch(ActionCreatorData.loadOffersActive(adapterData.cityOffers));
      });
  },
};

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
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
  }

  return state;
};
