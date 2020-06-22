import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import {PlaceCard} from "../place-card/place-card.jsx";

import {propsTypeOffer} from "../../propsType/propsType.js";

export class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };

    this._hadleArticleMoveMouse = this._hadleArticleMoveMouse.bind(this);
  }

  render() {
    const {onTitlePlaceClick, offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">

        {offers.map((offer, index) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
            onTitlePlaceClick={onTitlePlaceClick}
            onArticleMoveMouse={this._hadleArticleMoveMouse}
            index={index}
          />
        )}

      </div>
    );
  }

  _hadleArticleMoveMouse(cardPlace) {
    this.setState({
      active: cardPlace,
    });
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),
  onTitlePlaceClick: PropTypes.func.isRequired,
};
