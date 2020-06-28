import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";

import {propsTypeOffer, propsTypeReview} from "../../propsType/propsType.js";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: null,
    };

    this.handleTitlePlaceClick = this.handleTitlePlaceClick.bind(this);
  }

  handleTitlePlaceClick(userOffer) {
    this.setState({
      offer: userOffer,
    });
  }

  _renderApp() {
    const {placesCount, offers, reviews} = this.props;
    const {offer} = this.state;

    if (offer) {
      return (
        <Property
          offer={offer}
          reviews={reviews}
          offers={offers}
          onTitlePlaceClick={this.handleTitlePlaceClick}
        />
      );
    }

    return (
      <Main
        placesCount={placesCount}
        offers={offers}
        onTitlePlaceClick={this.handleTitlePlaceClick}
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
              offer={this.props.offers[0]}
              review={this.props.reviews[0]}
              onTitlePlaceClick={this.handleTitlePlaceClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(propsTypeReview).isRequired
  )
};
