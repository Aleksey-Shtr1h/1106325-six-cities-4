import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({setView: jest.fn()}),
  tileLayer: jest.fn().mockReturnValue({addTo: jest.fn()}),
  marker: jest.fn().mockReturnValue({addTo: jest.fn()}),
}));

import {offersProps} from "../../test/offersProps.js";

test(`Render App`, () => {
  const tree = renderer.create(
      <App
        placesCount={50}
        offers={offersProps}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
