import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {Property} from './property.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);

it(`Should Property render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const store = mockStore({
    DATA: {
      offersActive: testProps.offersProps,
    },

    APP: {
      offerId: 1,
    }

  });

  const tree = renderer.create(
      <Provider store={store}>
        <Property
          offer={testProps.offerProps}
          reviews={testProps.offerProps.reviews}
          offers={testProps.offersProps}
          onTitlePlaceClick={() => {}}
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
