import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const placeData = {
  id: `1`,
  isCheckedPremium: true,
  image: `img/apartment-01.jpg`,
  price: 120,
  ratingStars: `20%`,
  titleCard: `Beautiful &amp; luxurious apartment at great location`,
  typeCard: `Apartment`,
};

describe(`Should PlaceCard logic correctly`, () => {

  test(`Should PlaceCard button be pressed`, () => {
    const handleTitlePlaceClick = jest.fn();
    const hadleArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer = {placeData}
          handleTitlePlaceClick = {handleTitlePlaceClick}
          hadleArticleMoveMouse = {hadleArticleMoveMouse}
        />);

    const titleClick = placeCard.find(`.place-card__name a`);
    titleClick.props().onClick();
    // eslint-disable-next-line no-console
    // console.log(placeCard.debug());
    expect(handleTitlePlaceClick.mock.calls.length).toBe(1);
  });

  test(`Should PlaceCard onMouseEnter be pressed`, () => {
    const handleTitlePlaceClick = jest.fn();
    const hadleArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer = {placeData}
          handleTitlePlaceClick = {handleTitlePlaceClick}
          hadleArticleMoveMouse = {hadleArticleMoveMouse}
        />);

    const articleMoveMouseEnter = placeCard.find(`.place-card`);
    articleMoveMouseEnter.props().onMouseEnter();
    // eslint-disable-next-line no-console
    // console.log(placeCard.debug());
    expect(hadleArticleMoveMouse).toBeCalled();
  });

  test(`Should PlaceCard onMouseLeave be pressed`, () => {
    const handleTitlePlaceClick = jest.fn();
    const hadleArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer = {placeData}
          handleTitlePlaceClick = {handleTitlePlaceClick}
          hadleArticleMoveMouse = {hadleArticleMoveMouse}
        />);

    const articleMouseLeave = placeCard.find(`.place-card`);
    articleMouseLeave.props().onMouseLeave();
    // eslint-disable-next-line no-console
    // console.log(placeCard.debug());
    expect(hadleArticleMoveMouse).toBeCalledWith(null);
  });

});

