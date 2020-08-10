import React from 'react';
import {Switch, Route, Router, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {history} from '../../history.js';

import {Main} from '../main/main.jsx';
import {WrapperHeaderSite} from '../header-site/header-site.jsx';
import {WrapperProperty} from '../property/property.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
import {WrapperFavoritePlaces} from '../favorite-places/favorite-places.jsx';
import {Preload} from '../preload/preload.jsx';

import {getChangeCity, getCityActive} from '../../store/data-reducer/data-selectors.js';
import {getPlaceOffer, getPageApp} from '../../store/app-reducer/app-selectors.js';

import {OperationData} from '../../store/data-reducer/data-reducer.js';
import {OperationApp} from '../../store/app-reducer/app-reducer.js';
import {getAuthorizationStatus, getUserAuthData} from '../../store/user-reducer/user-selectors.js';
import {OperationUser, AuthorizationStatus} from '../../store/user-reducer/user-reducer.js';

import {HeaderType, PageApp, AppRoute} from '../../constans.js';
import {getOffer} from '../../utils/utils.js';

import {propsTypeAll} from '../../propsType/propsType.js';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {cityOffers, placeOffer, cityActive, authorizationStatus, login, userAuthData, pageApp} = this.props;

    const {offers, placesCount, cityCoordinates} = cityOffers;

    switch (pageApp) {

      case PageApp.MAIN:

        return (
          <WrapperHeaderSite
            type={HeaderType.main}
            userAuthData={userAuthData}
            authorizationStatus={authorizationStatus}
          >
            <Main
              placesCount={placesCount}
              offers={offers}
              cityActive={cityActive}
              cityCoordinates={cityCoordinates}
            />
          </WrapperHeaderSite>
        );

      case PageApp.PROPERTY:

        if (placeOffer) {
          const reviews = placeOffer.reviews;

          return (
            <WrapperHeaderSite
              type={HeaderType.property}
              userAuthData={userAuthData}
              authorizationStatus={authorizationStatus}
            >
              <WrapperProperty
                offer={placeOffer}
                reviews={reviews}
                offers={offers}
                cityCoordinates={cityCoordinates}
                authorizationStatus={authorizationStatus}
              />
            </WrapperHeaderSite>
          );
        }

        break;

      case PageApp.LOGIN:
        return (
          <WrapperHeaderSite
            type={HeaderType.signIn}
            userAuthData={userAuthData}
            authorizationStatus={authorizationStatus}
          >
            <SignIn
              onSubmit={login}
            />
          </WrapperHeaderSite>
        );

      default:
        return null;
    }

    return null;
  }

  render() {
    const {cityOffers, placeOffer, cityActive, authorizationStatus, login, userAuthData, routerOffer, favoritePlaces} = this.props;

    if (cityOffers !== null) {
      const {offers, placesCount, cityCoordinates} = cityOffers;

      return (
        <Router history={history}>
          <Switch>

            <Route exact path={AppRoute.MAIN}>
              <WrapperHeaderSite
                type={HeaderType.main}
                userAuthData={userAuthData}
                authorizationStatus={authorizationStatus}
              >
                <Main
                  placesCount={placesCount}
                  offers={offers}
                  cityActive={cityActive}
                  cityCoordinates={cityCoordinates}
                />
              </WrapperHeaderSite>

            </Route>

            <Route exact path={AppRoute.PROPERTY}
              render={(props) =>
                <React.Fragment>

                  {getOffer(placeOffer, props, routerOffer) &&

                  <WrapperHeaderSite
                    type={HeaderType.property}
                    userAuthData={userAuthData}
                    authorizationStatus={authorizationStatus}
                  >
                    <WrapperProperty
                      offer={placeOffer}
                      reviews={placeOffer.reviews}
                      offers={offers}
                      cityCoordinates={cityCoordinates}
                      authorizationStatus={authorizationStatus}
                      propsRouter={props}
                    />
                  </WrapperHeaderSite> ||

                  <Preload />
                  }

                </React.Fragment>
              }
            />

            <Route exact path={AppRoute.LOGIN}>
              {authorizationStatus !== AuthorizationStatus.AUTH &&

              <WrapperHeaderSite
                type={HeaderType.signIn}
                userAuthData={userAuthData}
                authorizationStatus={authorizationStatus}
              >
                <SignIn
                  onSubmit={login}
                />
              </WrapperHeaderSite> ||

              <Redirect to={AppRoute.MAIN} />
              }
            </Route>

            <Route exact path={AppRoute.FAVORITE}>
              {authorizationStatus === AuthorizationStatus.AUTH &&

              <WrapperHeaderSite
                type={``}
                userAuthData={userAuthData}
                authorizationStatus={authorizationStatus}
              >
                <WrapperFavoritePlaces
                  favoritePlaces={favoritePlaces}
                />

              </WrapperHeaderSite>

              }
            </Route>


            <Route
              render={() => (
                <React.Fragment>
                  <h1>
                    404.
                    <br />
                    <small>Page not found</small>
                  </h1>
                  <Link to={`/`}>Go to main page</Link>
                </React.Fragment>
              )}
            />


          </Switch>
        </Router>
      );
    }

    return (
      <Preload />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.DATA.favoritePlaces);
  return {
    placeOffer: getPlaceOffer(state),
    cityActive: getCityActive(state),
    cityOffers: getChangeCity(state),
    authorizationStatus: getAuthorizationStatus(state),
    userAuthData: getUserAuthData(state),
    pageApp: getPageApp(state),

    favoritePlaces: state.DATA.favoritePlaces,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(OperationUser.login(authData));
  },

  routerOffer(data) {
    dispatch(OperationApp.loadComments(data));
    dispatch(OperationData.loadNearbyOffers(data));
  }
});

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  cityOffers: propsTypeAll.cityOffers,
  placeOffer: propsTypeAll.placeOffer,
  cityActive: propsTypeAll.cityActive,
  authorizationStatus: propsTypeAll.string,
  login: propsTypeAll.func,
  userAuthData: propsTypeAll.userAuthData,
  pageApp: propsTypeAll.string,
  routerOffer: propsTypeAll.func,
  favoritePlaces: propsTypeAll.citiesAll,
};
