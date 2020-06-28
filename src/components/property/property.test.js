import React from "react";
import renderer from "react-test-renderer";
import {Property} from './property.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {offerProps, offersProps} from "../../test/offersProps.js";
import {reviewsProps} from '../../test/reviewsProps.js';

it(`Should Property render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
      <Property
        offer={offerProps}
        reviews={reviewsProps}
        offers={offersProps}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
