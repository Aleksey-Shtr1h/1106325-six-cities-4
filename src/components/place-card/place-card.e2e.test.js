import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

import {offerProps} from "../../test/offersProps.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should PlaceCard logic correctly`, () => {

  test(`Should PlaceCard onMouseEnter be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onCardPlaceHoverMove = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offerProps}
          onTitlePlaceClick={onTitlePlaceClick}
          onCardPlaceHoverMove={onCardPlaceHoverMove}
          onFavoriteBtnClick={() => {}}
          cityActive={`test`}
        />);

    const articleMoveMouseEnter = placeCard.find(`.place-card`);
    articleMoveMouseEnter.props().onMouseEnter();

    expect(onCardPlaceHoverMove).toBeCalled();
    expect(onCardPlaceHoverMove).toBeCalledWith(offerProps);
  });

  test(`Should PlaceCard onMouseLeave be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onCardPlaceHoverMove = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offerProps}
          onTitlePlaceClick={onTitlePlaceClick}
          onCardPlaceHoverMove={onCardPlaceHoverMove}
          onFavoriteBtnClick={() => {}}
          cityActive={`test`}
        />);

    const articleMouseLeave = placeCard.find(`.place-card`);
    articleMouseLeave.props().onMouseLeave();
    expect(onCardPlaceHoverMove).toBeCalledWith(null);
  });

});

