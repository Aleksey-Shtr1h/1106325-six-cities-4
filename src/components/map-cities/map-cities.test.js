import React from 'react';
import renderer from 'react-test-renderer';

import {MapCities} from './map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const idString = `test`;

it(`MapCities is rendered correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(
      <MapCities
        offersProps={testProps.offersProps}
        idPlace={idString}
        cityCoordinates={[1, 2]}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
