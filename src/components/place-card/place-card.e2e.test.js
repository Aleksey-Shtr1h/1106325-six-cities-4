import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

import {offerProps} from "../../test/offersProps.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should PlaceCard logic correctly`, () => {

  test(`Should PlaceCard button be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offerProps}
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
          offer={offerProps}
          onTitlePlaceClick={onTitlePlaceClick}
          onArticleMoveMouse={onArticleMoveMouse}
        />);

    const articleMoveMouseEnter = placeCard.find(`.place-card`);
    articleMoveMouseEnter.props().onMouseEnter();

    expect(onArticleMoveMouse).toBeCalled();
    expect(onArticleMoveMouse).toBeCalledWith(offerProps);
  });

  test(`Should PlaceCard onMouseLeave be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onArticleMoveMouse = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offerProps}
          onTitlePlaceClick={onTitlePlaceClick}
          onArticleMoveMouse={onArticleMoveMouse}
        />);

    const articleMouseLeave = placeCard.find(`.place-card`);
    articleMouseLeave.props().onMouseLeave();
    expect(onArticleMoveMouse).toBeCalledWith(null);
  });

});

