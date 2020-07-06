import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

test(`Render App`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(
      <App
        cityOffers={testProps.cityOffersProps}
        placeOffer={null}
        nameCities={[`test`]}
        cityActive={`test`}
        onTitlePlaceClick={() => {}}
        onMenuCityClick={() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
