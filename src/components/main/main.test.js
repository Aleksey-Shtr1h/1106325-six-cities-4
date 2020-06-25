import React from "react";
import renderer from "react-test-renderer";
import {Main} from './main.jsx';

import {offersProps} from "../../test/offersProps.js";

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({setView: jest.fn()}),
  tileLayer: jest.fn().mockReturnValue({addTo: jest.fn()}),
  marker: jest.fn().mockReturnValue({addTo: jest.fn()}),
}));

test(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        placesCount={50}
        offers={offersProps}
        onTitlePlaceClick={() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
