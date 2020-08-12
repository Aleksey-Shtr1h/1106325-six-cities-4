import React from 'react';
import renderer from 'react-test-renderer';

import {FavoritePlacesEmpty} from './favorite-places-empty.jsx';


it(`Should FavoritePlacesEmpty render correctly`, () => {

  const tree = renderer.create(
      <FavoritePlacesEmpty
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
