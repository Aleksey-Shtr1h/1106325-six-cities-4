import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

import {offerProps} from "../../test/offersProps.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should PlaceCard logic correctly`, () => {

  // test(`Should PlaceCard button be pressed`, () => {
  //   const onTitlePlaceClick = jest.fn();
  //   const onCardPlaceHoverMove = jest.fn();

  //   const placeCard = shallow(
  //       <PlaceCard
  //         offer={offerProps}
  //         onTitlePlaceClick={onTitlePlaceClick}
  //         onCardPlaceHoverMove={onCardPlaceHoverMove}
  //       />);

  //   const titleClick = placeCard.find(`.place-card__name a`);
  //   titleClick.props().onClick();
  //   expect(onTitlePlaceClick.mock.calls.length).toBe(1);
  // });

  test(`Should PlaceCard onMouseEnter be pressed`, () => {
    const onTitlePlaceClick = jest.fn();
    const onCardPlaceHoverMove = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offerProps}
          onTitlePlaceClick={onTitlePlaceClick}
          onCardPlaceHoverMove={onCardPlaceHoverMove}
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
        />);

    const articleMouseLeave = placeCard.find(`.place-card`);
    articleMouseLeave.props().onMouseLeave();
    expect(onCardPlaceHoverMove).toBeCalledWith(null);
  });

});

