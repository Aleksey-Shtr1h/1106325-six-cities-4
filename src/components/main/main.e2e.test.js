import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

import {testProps} from "../../test/offersProps.js";

Enzyme.configure({
  adapter: new Adapter(),
});

test(`Should main button be pressed`, () => {
  const onTitlePlaceClick = jest.fn();
  const onMenuCityClick = jest.fn();
  const onCardPlaceHoverMove = jest.fn();

  const main = shallow(
      <Main
        placesCount={50}
        offers={testProps.offersProps}
        nameCities={[`test`]}
        cityActive={`test`}
        onTitlePlaceClick={onTitlePlaceClick}
        onMenuCityClick={onMenuCityClick}
        cityCoordinates={[1, 2]}
        onCardPlaceHoverMove={onCardPlaceHoverMove}
      />
  );

  const titlesClick = main.find(`.place-card__name a`);
  const citiesNameClick = main.find(`.locations__item a`);

  titlesClick.forEach((titleClick) => {
    titleClick.props().onClick();
  });

  citiesNameClick.forEach((cityNameClick) => {
    cityNameClick.props().onClick();
  });

  expect(onTitlePlaceClick.mock.calls.length).toBe(titlesClick.length);
  expect(onMenuCityClick.mock.calls.length).toBe(citiesNameClick.length);
});
