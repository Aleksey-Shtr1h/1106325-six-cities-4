import React from "react";

import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';

import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";

import {propsTypeAll} from "../../propsType/propsType.js";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {cityOffers, placeOffer, cityActive} = this.props;

    const {offers, placesCount, cityCoordinates} = cityOffers;

    if (placeOffer) {
      const reviews = placeOffer.reviews;

      return (
        <Property
          offer={placeOffer}
          reviews={reviews}
          offers={offers}
          cityCoordinates={cityCoordinates}
        />
      );
    }

    return (
      <Main
        placesCount={placesCount}
        offers={offers}
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityOffers: state.cityOffers,
    cityActive: state.cityActive,
    placeOffer: state.placeOffer,
  };
};

export const WrapperApp = connect(mapStateToProps, null)(App);

App.propTypes = {
  cityOffers: propsTypeAll.cityOffers,
  placeOffer: propsTypeAll.placeOffer,
  cityActive: propsTypeAll.cityActive,
};
