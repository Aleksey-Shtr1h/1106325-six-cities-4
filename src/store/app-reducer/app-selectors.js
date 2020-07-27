import {NameSpace} from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getPlaceOffer = (state) => {
  return state[NAME_SPACE].placeOffer;
};

export const getOfferId = (state) => {
  return state[NAME_SPACE].offerId;
};
