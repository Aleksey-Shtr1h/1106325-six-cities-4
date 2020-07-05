import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Property} from "./property.jsx";

import {testProps} from "../../test/offersProps.js";
// import {reviewsProps} from "../../test/reviewsProps.js";

Enzyme.configure({
  adapter: new Adapter(),
});

test(`Should Property button be pressed`, () => {
  const onTitlePlaceClick = jest.fn();

  const property = shallow(
      <Property
        offer={testProps.offerProps}
        reviews={testProps.offerProps.reviews}
        offers={testProps.offersProps}
        onTitlePlaceClick={onTitlePlaceClick}
      />
  );

  const titlesClick = property.find(`.place-card__name a`);

  titlesClick.forEach((titleClick) => {
    titleClick.props().onClick();
  });

  expect(onTitlePlaceClick.mock.calls.length).toBe(titlesClick.length);
});
