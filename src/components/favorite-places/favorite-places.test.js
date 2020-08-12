import React from 'react';
import renderer from 'react-test-renderer';

import {FavoritePlaces} from './favorite-places.jsx';

import {testProps} from '../../test/offersProps.js';

it(`Should FavoritePlaces render correctly`, () => {

  const tree = renderer.create(
      <FavoritePlaces
        favoritePlaces={null}
        onFavoriteBtnClick={() => {}}
        citiesAll={testProps.citiesAll}
        onTitlePlaceClick={() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
