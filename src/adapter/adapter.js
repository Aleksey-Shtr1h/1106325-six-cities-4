const changeOffer = (offer) => {
  const coord = [];
  return {
    id: offer.id,
    isCheckedPremium: offer.is_premium,
    images: offer.images,
    price: offer.price,
    ratingStars: offer.rating,
    titleCard: offer.title,
    typeCard: offer.type,
    descriptions: offer.description,
    numberBadrooms: offer.bedrooms,
    numberGuests: offer.max_adults,
    householdItems: offer.goods,
    previewImage: offer.previewImage,
    infoUser: {
      id: offer.host.id,
      avatarUser: offer.host.avatar_url,
      nameUser: offer.host.name,
      markSuper: offer.host.is_pro,
    },
    coordinates: [offer.location.latitude, offer.location.longitude],
    zoom: offer.location.zoom,
    reviews: {
      id: 1,
      ratingStars: 3,
      descriptions: `Test`,
      date: new Date(),
      nameUser: `User1`,
    },
  };
}

export const adapterOffers = (offersApi) => {
  let cities = [];
  let newOffers = {};
  let cityCoords= {};

  offersApi.map((offerApi) => {
    const {name, location} = offerApi.city;
    cities.push(name);
    cities = [...new Set(cities)];
    const cityNew = cities.find((city) => city === name);

    if (name === cityNew && `${name}` in newOffers) {
      const a = changeOffer(offerApi);
      // Object.assign(newOffers, {[name]: a});
      newOffers[name].push(changeOffer(offerApi));
    } else {
      newOffers[name] = [changeOffer(offerApi)];
      cityCoords[name] = [location.latitude, location.longitude];
    }
  });

  cities.sort((a, b) => a.localeCompare(b));

  const cityOffers = cities.map((city, index) => {
    const placesCount = newOffers[city].length;
    return {
      cityName: city,
      offers: newOffers[city],
      placesCount,
      cityCoordinates: cityCoords[city],
    };
  });

  // console.log(newOffers);

  return {cities, cityOffers};
};