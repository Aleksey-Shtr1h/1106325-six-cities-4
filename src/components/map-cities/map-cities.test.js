import React from 'react';
import renderer from 'react-test-renderer';

import {MapCities} from './map-cities.jsx';

import {offersProps} from "../../test/offersProps.js";

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({setView: jest.fn()}),
  tileLayer: jest.fn().mockReturnValue({addTo: jest.fn()}),
  marker: jest.fn().mockReturnValue({addTo: jest.fn()}),
}));

it(`MapCities is rendered correctly`, () => {

  const tree = renderer.create(
      <MapCities
        offersProps={offersProps}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
