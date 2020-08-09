import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {CitiesItem} from './cities-item.jsx';

import {history} from '../../history.js';

import {testProps} from '../../test/offersProps.js';

test(`Should CitiesItem render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <CitiesItem
          cityName={`test`}
          cityActive={`test`}
          onMenuCityClick={() => {}}
          citiesAll={testProps.cityOffersArrayProps}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
