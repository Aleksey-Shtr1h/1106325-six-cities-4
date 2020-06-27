import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {offersProps} from "../../test/offersProps.js";
import {reviewsProps} from '../../test/reviewsProps.js';

test(`Render App`, () => {
  MapCities.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
      <App
        placesCount={50}
        offers={offersProps}
        reviews={reviewsProps}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
