import {extend} from '../../utils/utils.js';
import {ActionTypeData, ActionCreatorData} from '../data-action/data-action.js';
import {adapterOffers} from '../../adapter/adapter.js';

const initialState = {
  citiesAll: null, // данные приложения с сервера
  nameCities: null, // данные приложения с сервера
  cityOffers: null, // данные приложения с сервера
  cityActive: null, // данные приложения с сервера
  offersActive: null, // данные приложения с сервера
  activeSort: `popular`,
};

export const OperationData = {
  loadCitiesOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const adapterData = adapterOffers(response.data);
        // console.log(adapterData.cityOffers);
        dispatch(ActionCreatorData.loadCitiesAll(adapterData.cityOffers));
        dispatch(ActionCreatorData.loadCitiesName(adapterData.cities));
        dispatch(ActionCreatorData.loadCityActive(adapterData.cityOffers[0].cityName));
        dispatch(ActionCreatorData.loadOffersActive(adapterData.cityOffers));
        dispatch(ActionCreatorData.loadCitiesOffers(adapterData.cityOffers[0]));
      });
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.CHANGE_CITY: //
      return extend(state, {
        cityOffers: action.payload,
        cityActive: action.payload.cityName,
        offersActive: action.payload.offers,
        activeSort: `popular`,
      });

    case ActionTypeData.SORTING_OFFERS_CHANGE://
      return extend(state, {
        activeSort: action.payload.sortType,
        offersActive: action.payload.offersActive,
      });

    case ActionTypeData.LOAD_CITIES_OFFERS: //
      return extend(state, {
        cityOffers: action.payload,
      });

    case ActionTypeData.LOAD_CITIES_NAME: //
      return extend(state, {
        nameCities: action.payload,
      });

    case ActionTypeData.LOAD_CITY_ACTIVE: //
      return extend(state, {
        cityActive: action.payload,
      });

    case ActionTypeData.LOAD_OFFERS_ACTIVE: //
      return extend(state, {
        offersActive: action.payload,
      });

    case ActionTypeData.LOAD_CITIES_ALL:
      return extend(state, {
        citiesAll: action.payload,
      });
  }

  return state;
};
