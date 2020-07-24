import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list.jsx';

import {testProps} from '../../test/offersProps.js';

test(`Should CitiesList render correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        nameCities={[`test`]}
        cityActive={`test`}
        onMenuCityClick={() => {}}
        citiesAll={testProps.cityOffersArrayProps}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
