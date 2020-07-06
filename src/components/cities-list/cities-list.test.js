import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from './cities-list.jsx';

test(`Should CitiesList render correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        nameCities={[`test`]}
        cityActive={`test`}
        onMenuCityClick={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
