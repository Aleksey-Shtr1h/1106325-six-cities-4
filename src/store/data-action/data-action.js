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

export const getOffersActive = (city, citiesAll) => {
  return citiesAll.find((cityOffer) => cityOffer.cityName === city);
};

export const getNearbyOffers = (nearbyOffers) => {
  const newNearbyOffers = Object.assign({}, nearbyOffers);
  return newNearbyOffers;
};

export const ActionTypeData = {
  CHANGE_CITY: `CHANGE_CITY`,
  SORTING_OFFERS_CHANGE: `SORTING_OFFERS_CHANGE`,
  LOAD_CITIES_OFFERS: `LOAD_CITIES_OFFERS`,
  LOAD_CITIES_NAME: `LOAD_CITIES_NAME`,
  LOAD_CITY_ACTIVE: `LOAD_CITY_ACTIVE`,
  LOAD_OFFERS_ACTIVE: `LOAD_OFFERS_ACTIVE`,
  LOAD_CITIES_ALL: `LOAD_CITIES_ALL`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_NEARBY_CITIES: `LOAD_NEARBY_CITIES`,
  LOAD_FAVORITE_PLACES: `LOAD_FAVORITE_PLACES`,
};

export const ActionCreatorData = {
  actionCity: (city, citiesAll) => ({
    type: ActionTypeData.CHANGE_CITY,
    payload: getOffersActive(city, citiesAll),
  }),

  actionSortingOffersChange: (sortType, offersActive, offersOriginal) => ({
    type: ActionTypeData.SORTING_OFFERS_CHANGE,
    payload: {
      sortType,
      offersActive: getSortedOffers(offersActive, sortType, offersOriginal),
    }
  }),

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

  loadCityActive: (city) => {
    return {
      type: ActionTypeData.LOAD_CITY_ACTIVE,
      payload: city,
    };
  },

  loadOffersActive: (citiesOffers) => {
    return {
      type: ActionTypeData.LOAD_OFFERS_ACTIVE,
      payload: citiesOffers[0].offers,
    };
  },

  loadCitiesAll: (citiesOffers) => {
    return {
      type: ActionTypeData.LOAD_CITIES_ALL,
      payload: citiesOffers,
    };
  },

  loadNearbyOffers: (nearbyOffers) => {
    return {
      type: ActionTypeData.LOAD_NEARBY_OFFERS,
      payload: getNearbyOffers(nearbyOffers),
    };
  },

  loadNearbyCities: (citiesName) => {
    return {
      type: ActionTypeData.LOAD_NEARBY_CITIES,
      payload: citiesName,
    };
  },

  loadFavoritePlaces: (places) => {
    return {
      type: ActionTypeData.LOAD_FAVORITE_PLACES,
      payload: places,
    };
  },

};
