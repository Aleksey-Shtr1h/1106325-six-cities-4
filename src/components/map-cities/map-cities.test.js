import React from 'react';
import renderer from 'react-test-renderer';

import {MapCities} from './map-cities.jsx';

// import {offersProps} from "../../test/offersProps.js";

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({setView: jest.fn()}),
  tileLayer: jest.fn().mockReturnValue({addTo: jest.fn()}),
  marker: jest.fn().mockReturnValue({addTo: jest.fn()}),
}));

it(`MapCities is rendered correctly`, () => {

  const tree = renderer.create(
      <MapCities
        locationsCoords={[[1, 2], [1, 2], [1, 2], [1, 2]]}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
