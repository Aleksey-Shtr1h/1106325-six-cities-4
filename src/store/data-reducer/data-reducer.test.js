import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';

import {dataReducer, OperationData} from './data-reducer.js';
import {ActionTypeData} from '../data-action/data-action.js';
import {getOffersActive, getSortedOffers} from '../data-action/data-action.js';
import {testProps} from '../../test/offersProps.js';

const api = createAPI(() => {});

const citiesAll = testProps.cityOffersArrayProps;
const cityOffers = testProps.cityOffersArrayProps[0];
const cityActive = testProps.cityOffersArrayProps[0].cityName;
const offersActive = testProps.cityOffersArrayProps[0].offers;
const offersOriginal = testProps.cityOffersArrayProps[0].offers;
const activeSort = `popular`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(dataReducer(void 0, {})).toEqual({
    citiesAll: null,
    nameCities: null,
    cityOffers: null,
    cityActive: null,
    activeSort: `popular`,
    offersActive: null,
    nearbyOffers: null,
    nearbyCity: null,
    favoritePlaces: null,
  });
});

it(`Reducer should set active city and active offer`, () => {
  expect(dataReducer({
    cityActive,
  }, {
    type: ActionTypeData.CHANGE_CITY,
    payload: getOffersActive(cityActive, citiesAll),
  })).toEqual({
    cityOffers,
    cityActive,
    offersActive,
    activeSort: `popular`,
  });
});

it(`Reducer should set sorting offers change`, () => {
  expect(dataReducer({
    activeSort,
    offersActive,
  }, {
    type: ActionTypeData.SORTING_OFFERS_CHANGE,
    payload: {
      sortType: activeSort,
      offersActive: getSortedOffers(offersActive, activeSort, offersOriginal),
    }
  })).toEqual({
    activeSort,
    offersActive,
  });
});

it(`Reducer should load cities offers`, () => {
  expect(dataReducer({
    cityOffers,
  }, {
    type: ActionTypeData.LOAD_CITIES_OFFERS,
    payload: cityOffers,
  })).toEqual({
    cityOffers,
  });
});

it(`Reducer should load cities name`, () => {
  expect(dataReducer({
    citiesName: [`test`],
  }, {
    type: ActionTypeData.LOAD_CITIES_OFFERS,
    payload: [`test`],
  })).toEqual({
    citiesName: [`test`],
    cityOffers: [`test`],
  });
});

it(`Reducer should load city active`, () => {
  expect(dataReducer({
    cityActive: `test`,
  }, {
    type: ActionTypeData.LOAD_CITY_ACTIVE,
    payload: `test`,
  })).toEqual({
    cityActive: `test`,
  });
});

it(`Reducer should load offers active`, () => {
  expect(dataReducer({
    offersActive,
  }, {
    type: ActionTypeData.LOAD_OFFERS_ACTIVE,
    payload: offersActive,
  })).toEqual({
    offersActive,
  });
});

it(`Reducer should load cities all`, () => {
  expect(dataReducer({
    citiesAll,
  }, {
    type: ActionTypeData.LOAD_CITIES_ALL,
    payload: citiesAll,
  })).toEqual({
    citiesAll,
  });
});


it(`Should make a correct API call to /hotels`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const loadCitiesOffers = OperationData.loadCitiesOffers();

  apiMock
  .onGet(`/hotels`)
  .reply(200, testProps.apiHostels);

  return loadCitiesOffers(dispatch, () => {}, api)
  .then(() => {
    expect(dispatch).toHaveBeenCalledTimes(5);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypeData.LOAD_CITIES_ALL,
      payload: testProps.apiCitiesOffers,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionTypeData.LOAD_CITIES_NAME,
      payload: [`test`],
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: ActionTypeData.LOAD_CITY_ACTIVE,
      payload: `test`,
    });
    expect(dispatch).toHaveBeenNthCalledWith(4, {
      type: ActionTypeData.LOAD_OFFERS_ACTIVE,
      payload: testProps.apiAdapterHostels,
    });
    expect(dispatch).toHaveBeenNthCalledWith(5, {
      type: ActionTypeData.LOAD_CITIES_OFFERS,
      payload: testProps.apiCitiesOffers[0],
    });
  });
});
