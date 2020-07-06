import React from "react";
import renderer from "react-test-renderer";
import {CitiesItem} from './cities-item.jsx';

test(`Should CitiesItem render correctly`, () => {
  const tree = renderer.create(
      <CitiesItem
        cityName={`test`}
        cityActive={`test`}
        onMenuCityClick={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
