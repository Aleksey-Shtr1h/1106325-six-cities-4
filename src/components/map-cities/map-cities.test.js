import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {MapCities} from './map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);

it(`MapCities is rendered correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();
  const store = mockStore({
    offerId: null,
  });
  const tree = renderer.create(
      <Provider store={store}>
        <MapCities
          offersProps={testProps.offersProps}
          idPlace={`test`}
          cityCoordinates={[1, 2]}
          offerId={`test`}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
