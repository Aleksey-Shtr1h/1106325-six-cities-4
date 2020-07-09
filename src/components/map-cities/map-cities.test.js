import React from 'react';
import renderer from 'react-test-renderer';

import {MapCities} from './map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

it(`MapCities is rendered correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(
      <MapCities
        offersProps={testProps.offersProps}
        idPlace={`test`}
        cityCoordinates={[1, 2]}
        offerId={`test2`}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
