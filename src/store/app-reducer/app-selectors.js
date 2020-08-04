import {NameSpace} from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getPlaceOffer = (state) => {
  return state[NAME_SPACE].placeOffer;
};

export const getOfferId = (state) => {
  return state[NAME_SPACE].offerId;
};

export const getPageApp = (state) => {
  return state[NAME_SPACE].pageApp;
};

export const getRatingPlace = (state) => {
  return state[NAME_SPACE].rating;
};

export const getCommentPlace = (state) => {
  return state[NAME_SPACE].comment;
};
