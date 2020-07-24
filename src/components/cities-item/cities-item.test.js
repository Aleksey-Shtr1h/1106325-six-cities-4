import React from "react";
import renderer from "react-test-renderer";
import {CitiesItem} from './cities-item.jsx';

import {testProps} from '../../test/offersProps.js';

test(`Should CitiesItem render correctly`, () => {
  const tree = renderer.create(
      <CitiesItem
        cityName={`test`}
        cityActive={`test`}
        onMenuCityClick={() => {}}
        citiesAll={testProps.cityOffersArrayProps}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
