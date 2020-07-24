import {dataReducer} from './data-reducer.js';
import {ActionTypeData} from '../data-action/data-action.js';
import {getOffersActive, getSortedOffers} from '../data-action/data-action.js';
import {testProps} from '../../test/offersProps.js';

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

it(`Reducer should set 3`, () => {
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
