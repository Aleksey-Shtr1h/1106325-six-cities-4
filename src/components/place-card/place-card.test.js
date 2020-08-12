import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import {PlaceCard} from './place-card.jsx';

import {history} from '../../history.js';

import {testProps} from "../../test/offersProps.js";

test(`Should PlaceCard render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <PlaceCard
          offer={testProps.offerProps}
          onTitlePlaceClick={() => {}}
          onCardPlaceHoverMove={() => {}}
          onFavoriteBtnClick={() => {}}
          cityActive={`test`}
          citiesAll={testProps.cityOffersArrayProps}
          nearbyOffers={testProps.cityOffersProps}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
