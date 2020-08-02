import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {Main} from '../main/main.jsx';
import {Property} from '../property/property.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
import {WrapperHeaderSite} from '../header-site/header-site.jsx';

import {getChangeCity, getCityActive} from '../../store/data-reducer/data-selectors.js';
import {getPlaceOffer} from '../../store/app-reducer/app-selectors.js';
import {getAuthorizationStatus, getUserAuthEmail} from '../../store/user-reducer/user-selectors.js';
import {AuthorizationStatus, OperationUser} from '../../store/user-reducer/user-reducer.js';

import {HeaderType} from '../../constans.js';

import {propsTypeAll} from '../../propsType/propsType.js';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {cityOffers, placeOffer, cityActive, authorizationStatus, login, userAuthEmail} = this.props;

    const {offers, placesCount, cityCoordinates} = cityOffers;

    if (placeOffer) {
      const reviews = placeOffer.reviews;

      return (
        <WrapperHeaderSite
          type={HeaderType.property}
          userAuthEmail={userAuthEmail}
        >
          <Property
            offer={placeOffer}
            reviews={reviews}
            offers={offers}
            cityCoordinates={cityCoordinates}
          />
        </WrapperHeaderSite>
      );
    }

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <WrapperHeaderSite
          type={HeaderType.main}
          userAuthEmail={userAuthEmail}
        >
          <Main
            placesCount={placesCount}
            offers={offers}
            cityActive={cityActive}
            cityCoordinates={cityCoordinates}
          />
        </WrapperHeaderSite>
      );
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <WrapperHeaderSite
          type={HeaderType.signIn}
          userAuthEmail={userAuthEmail}
        >
          <SignIn
            onSubmit={login}
          />
        </WrapperHeaderSite>
      );
    }

    return null;
  }

  render() {
    if (this.props.cityOffers === null) {
      return (
        <React.Fragment>

          <div className="loading-network">
            <h1 className="loading-network__title">Загрузка...</h1>
          </div>

        </React.Fragment>
      );
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Property
              offer={this.props.cityOffers.offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    placeOffer: getPlaceOffer(state),
    cityActive: getCityActive(state),
    cityOffers: getChangeCity(state),
    authorizationStatus: getAuthorizationStatus(state),
    userAuthEmail: getUserAuthEmail(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(OperationUser.login(authData));
  },
});

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  cityOffers: propsTypeAll.cityOffers,
  placeOffer: propsTypeAll.placeOffer,
  cityActive: propsTypeAll.cityActive,
  authorizationStatus: propsTypeAll.string,
  login: propsTypeAll.func,
  userAuthEmail: propsTypeAll.string,
};
