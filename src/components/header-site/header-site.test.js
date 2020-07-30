import React from 'react';
import renderer from 'react-test-renderer';

import {HeaderSite} from './header-site.jsx';

const children = <div className="children-component" />;

it(`Should HeaderSite render correctly 1`, () => {

  const tree = renderer.create(
      <HeaderSite
        type={`test`}
        userAuthEmail={`test`}
        error={null}
        onHideErrorBlock={() => {}}
      >
        {children}
      </HeaderSite>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
