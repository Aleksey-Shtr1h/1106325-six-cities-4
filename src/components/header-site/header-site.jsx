import React from 'react';

import {propsTypeAll} from "../../propsType/propsType.js";

export const HeaderSite = ({type, children, userAuthEmail}) => {
  return (
    <div className={`page page--gray ${type}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userAuthEmail}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

HeaderSite.propTypes = {
  type: propsTypeAll.string,
  children: propsTypeAll.children,
  userAuthEmail: propsTypeAll.string,
};
