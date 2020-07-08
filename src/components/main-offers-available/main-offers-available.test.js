import React from "react";
import renderer from "react-test-renderer";
import {MainOffersAvailable} from './main-offers-available.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

test(`Should MainOffersAvailable render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
      <MainOffersAvailable
        placesCount={50}
        cityActive={`test`}
        offers={testProps.offersProps}
        onTitlePlaceClick={() => {}}
        cityCoordinates={[1, 2]}
        onCardPlaceHoverMove={() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
