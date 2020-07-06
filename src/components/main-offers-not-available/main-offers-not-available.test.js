import React from "react";
import renderer from "react-test-renderer";
import {MainOffersNotAvailable} from './main-offers-not-available.js';

test(`Should MainOffersNotAvailable render correctly`, () => {
  const tree = renderer.create(
      <MainOffersNotAvailable
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
