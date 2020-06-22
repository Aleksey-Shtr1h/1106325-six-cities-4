import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

import {offersProps} from "../../test/offersProps.js";

Enzyme.configure({
  adapter: new Adapter(),
});

test(`Should main button be pressed`, () => {
  const onTitlePlaceClick = jest.fn();

  const main = shallow(
      <Main
        placesCount={50}
        offers={offersProps}
        onTitlePlaceClick={onTitlePlaceClick}
      />
  );

  const titlesClick = main.find(`.place-card__name a`);

  titlesClick.forEach((titleClick) => {
    titleClick.props().onClick();
  });

  expect(onTitlePlaceClick.mock.calls.length).toBe(titlesClick.length);
});
