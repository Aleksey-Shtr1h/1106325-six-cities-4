import React from 'react';
import renderer from 'react-test-renderer';

import {MapCities} from './map-cities.jsx';

import {offersProps} from "../../test/offersProps.js";

it(`MapCities is rendered correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
      <MapCities
        offersProps={offersProps}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
