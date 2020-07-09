import React from "react";
import renderer from "react-test-renderer";

import {SortOffers} from './sort-offers.jsx';

import {testProps} from "../../test/offersProps.js";

it(`Should SortOffers render correctly`, () => {
  const tree = renderer.create(

      <SortOffers
        activeSort={`popular`}
        onSortingOffersChange={() => {}}
        offersActive={testProps.offersProps}
        originalOffers={testProps.offersProps}
      />,

      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();
  expect(tree).toMatchSnapshot();
});
