import React from "react";

import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";

import {propsTypeAll} from "../../propsType/propsType.js";

import {ActionCreator} from '../../store/city-action/city-action.js';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {cityOffers, placeOffer, nameCities, cityActive, onTitlePlaceClick, onMenuCityClick} = this.props;

    const {offers, placesCount, cityCoordinates} = cityOffers;

    if (placeOffer) {
      const reviews = placeOffer.reviews;

      return (
        <Property
          offer={placeOffer}
          reviews={reviews}
          offers={offers}
          onTitlePlaceClick={onTitlePlaceClick}
          cityCoordinates={cityCoordinates}
        />
      );
    }

    return (
      <Main
        placesCount={placesCount}
        offers={offers}
        onTitlePlaceClick={onTitlePlaceClick}
        onMenuCityClick={onMenuCityClick}
        nameCities={nameCities}
        cityActive={cityActive}
        cityCoordinates={cityCoordinates}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Property
              offer={this.props.cityOffers.offers[0]}
              onTitlePlaceClick={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nameCities: state.nameCities,
    cityOffers: state.cityOffers,
    cityActive: state.cityActive,
    placeOffer: state.placeOffer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuCityClick: bindActionCreators(ActionCreator.actionCity, dispatch),
    onTitlePlaceClick: bindActionCreators(ActionCreator.actionTitleClick, dispatch),
  };
};

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  cityOffers: propsTypeAll.cityOffers,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  onTitlePlaceClick: propsTypeAll.onTitlePlaceClick,
  nameCities: propsTypeAll.nameCities,
  placeOffer: propsTypeAll.placeOffer,
  cityActive: propsTypeAll.cityActive,
};
