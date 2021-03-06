import React from 'react';
import renderer from 'react-test-renderer';

import {ErrorNetwork} from './error-network.jsx';


it(`Should ErrorNetwork render correctly 1`, () => {

  const tree = renderer.create(
      <ErrorNetwork
        err={`test`}
        onHideErrorBlock={() => {}}
        activeError={false}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
