import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {Main} from './main.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);
const onSortingOffersChange = () => {};

test(`Should Main render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const store = mockStore({
    activeSort: `popular`,
    offersActive: testProps.offersProps,
    onSortingOffersChange,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          placesCount={50}
          offers={testProps.offersProps}
          nameCities={[`test`]}
          cityActive={`test`}
          onTitlePlaceClick={() => {}}
          onMenuCityClick={() => {}}
          cityCoordinates={[1, 2]}
          onCardPlaceHoverMove={() => {}}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
