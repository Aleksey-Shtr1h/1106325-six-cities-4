import React from 'react';
import renderer from 'react-test-renderer';

import {ErrorNetwork} from './error-network.jsx';

// import {testProps} from '../../test/offersProps.js';


it(`Should ErrorNetwork render correctly 1`, () => {

  const tree = renderer.create(
      <ErrorNetwork
        err={`test`}
        onHideErrorBlock={() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
