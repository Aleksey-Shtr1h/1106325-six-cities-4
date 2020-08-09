import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router-dom";
import {history} from '../../history.js';


import {HeaderSite} from './header-site.jsx';

const children = <div className="children-component" />;

const host = {
  id: 1,
  email: `test`,
  name: `test`,
  [`avatar_url`]: `test`,
  [`is_pro`]: true,
};

it(`Should HeaderSite render correctly 1`, () => {

  const tree = renderer.create(
      <Router history={history}>
        <HeaderSite
          type={`test`}
          userAuthData={host}
          error={null}
          onHideErrorBlock={() => {}}
          onPageChange={() => {}}
          authorizationStatus={`test`}
          activeError={false}
        >
          {children}
        </HeaderSite>
      </Router>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
