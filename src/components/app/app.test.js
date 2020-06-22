import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';

import {offersProps} from "../../test/offersProps.js";

test(`Render App`, () => {
  const tree = renderer.create(
      <App
        placesCount={50}
        offers={offersProps}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
