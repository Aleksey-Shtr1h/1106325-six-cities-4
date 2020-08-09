import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {PlacesList} from './places-list.jsx';
import {history} from '../../history.js';

import {testProps} from "../../test/offersProps.js";

test(`Should PlacesList render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <PlacesList
          offers={testProps.offersProps}
          offersActive={testProps.offersProps}
          onTitlePlaceClick = {() => {}}
          onCardPlaceHoverMove = {() => {}}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
