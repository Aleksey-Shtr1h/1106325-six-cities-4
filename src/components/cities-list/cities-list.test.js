import React from 'react';
import {Router} from "react-router-dom";
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list.jsx';

import {history} from '../../history.js';

import {testProps} from '../../test/offersProps.js';

test(`Should CitiesList render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>

        <CitiesList
          nameCities={[`test`]}
          cityActive={`test`}
          onMenuCityClick={() => {}}
          citiesAll={testProps.cityOffersArrayProps}
        />

      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
