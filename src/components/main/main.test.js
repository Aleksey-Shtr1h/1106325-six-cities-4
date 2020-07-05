import React from "react";
import renderer from "react-test-renderer";
import {Main} from './main.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

test(`Should Main render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();


  const tree = renderer.create(
      <Main
        placesCount={50}
        offers={testProps.offersProps}
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
