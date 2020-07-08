import React from "react";
import renderer from "react-test-renderer";
import {Property} from './property.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

it(`Should Property render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(
      <Property
        offer={testProps.offerProps}
        reviews={testProps.offerProps.reviews}
        offers={testProps.offersProps}
        onTitlePlaceClick={() => {}}
        cityCoordinates={[1, 2]}
        onCardPlaceHoverMove={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
