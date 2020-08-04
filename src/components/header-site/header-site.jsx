import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ErrorNetwork} from '../error-network/error-network.jsx';
import {ActionCreatorUser} from '../../store/user-action/user-action.js';
import {ActionCreatorApp} from '../../store/app-action/app-action.js';
import {getError} from '../../store/user-reducer/user-selectors.js';

import {AuthorizationStatus} from '../../store/user-reducer/user-reducer.js';

import {propsTypeAll} from '../../propsType/propsType.js';

export const HeaderSite = ({type, children, userAuthEmail, error, onHideErrorBlock, onSignInPage, onMainPage, authorizationStatus}) => {

  const emptyFunc = () => {};

  return (
    <div className={`page page--gray ${type}`}>

      {error !== null &&
        <ErrorNetwork
          err={error}
          onHideErrorBlock={onHideErrorBlock}
        />
      }

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                className="header__logo-link header__logo-link--active"
                onClick={onMainPage}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span
                      className="header__user-name user__name"
                      onClick={authorizationStatus !== AuthorizationStatus.AUTH ? onSignInPage : emptyFunc}
                    >
                      {userAuthEmail}
                    </span>
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

const mapStateToProps = (state) => {
  return {
    error: getError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHideErrorBlock: bindActionCreators(ActionCreatorUser.hideErrorBlock, dispatch),
    onSignInPage: bindActionCreators(ActionCreatorApp.actionGetSignInPage, dispatch),
    onMainPage: bindActionCreators(ActionCreatorApp.actionGetMainPage, dispatch),
  };
};

export const WrapperHeaderSite = connect(mapStateToProps, mapDispatchToProps)(HeaderSite);

HeaderSite.propTypes = {
  type: propsTypeAll.string,
  children: propsTypeAll.children,
  userAuthEmail: propsTypeAll.string,
  error: propsTypeAll.numberAndNull,
  onHideErrorBlock: propsTypeAll.func,
  onSignInPage: propsTypeAll.func,
  onMainPage: propsTypeAll.func,
  authorizationStatus: propsTypeAll.string,
};
