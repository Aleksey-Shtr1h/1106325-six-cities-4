import React from 'react';
import renderer from 'react-test-renderer';
import leaflet from 'leaflet';

import {MapCities, getPinStyle, getMapPlace, getCenterMap} from './map-cities.jsx';
// import {MapCities} from './map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const iconPin = leaflet.icon({
  iconUrl: `test.svg`,
  iconSize: [1, 1],
});

it(`Testing func pin style return`, () => {
  expect(getPinStyle(`test.svg`, [1, 1])).toEqual(iconPin);
});

it(`Testing func map place return`, () => {
  expect(getMapPlace(testProps.offersProps, `test`)).toEqual(testProps.offersProps);
});

it(`Testing func center map return`, () => {
  expect(getCenterMap([1, 1], testProps.offersProps, `city`)).toEqual([1, 1]);
});

it(`MapCities is rendered correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(
      <MapCities
        offersProps={testProps.offersProps}
        offerStaticId={`test`}
        cityCoordinates={[1, 2]}
        offerId={1}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
