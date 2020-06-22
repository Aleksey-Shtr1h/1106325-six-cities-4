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
  images: [`test`],
  price: 120,
  ratingStars: 2.5,
  titleCard: `test`,
  typeCard: `test`,
  descriptions: [`test`],
};

describe(`Should PlaceCard logic correctly`, () => {

  test(`Should PlaceCard button be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={placeData}
          onTitlePlaceClick={onTitlePlaceClick}
          onArticleMoveMouse={onArticleMoveMouse}
        />);

    const titleClick = placeCard.find(`.place-card__name a`);
    titleClick.props().onClick();
    expect(onTitlePlaceClick.mock.calls.length).toBe(1);
  });

  test(`Should PlaceCard onMouseEnter be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={placeData}
          onTitlePlaceClick={onTitlePlaceClick}
          onArticleMoveMouse={onArticleMoveMouse}
        />);

    const articleMoveMouseEnter = placeCard.find(`.place-card`);
    articleMoveMouseEnter.props().onMouseEnter();

    expect(onArticleMoveMouse).toBeCalled();
    expect(onArticleMoveMouse).toBeCalledWith(placeData);
  });

  test(`Should PlaceCard onMouseLeave be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={placeData}
          onTitlePlaceClick={onTitlePlaceClick}
          onArticleMoveMouse={onArticleMoveMouse}
        />);

    const articleMouseLeave = placeCard.find(`.place-card`);
    articleMouseLeave.props().onMouseLeave();
    expect(onArticleMoveMouse).toBeCalledWith(null);
  });

});

