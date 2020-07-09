import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {App} from './app.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);

it(`Should App render correctly 1`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const store = mockStore({
    nameCities: [`test1`, `test2`],
    cityOffers: testProps.cityOffersProps,
    cityActive: testProps.cityOffersProps.cityName,
    placeOffer: null,
    activeSort: `popular`,
    offersActive: testProps.offersProps,
    offerId: null,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          cityOffers={testProps.cityOffersProps}
          placeOffer={null}
          nameCities={[`test`]}
          cityActive={`test`}
          onTitlePlaceClick={() => {}}
          onMenuCityClick={() => {}}
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
