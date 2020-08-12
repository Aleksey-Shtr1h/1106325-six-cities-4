import React from 'react';
import renderer from 'react-test-renderer';

import {Preload} from './preload.jsx';


it(`Should Preload render correctly`, () => {

  const tree = renderer.create(
      <Preload
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
