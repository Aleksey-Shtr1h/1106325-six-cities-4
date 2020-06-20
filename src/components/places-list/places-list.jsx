import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import {PlaceCard} from "../place-card/place-card.jsx";

export class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
    };

    this._hadleArticleMoveMouse = this._hadleArticleMoveMouse.bind(this);
  }

  render() {
    const {handleTitlePlaceClick, offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">

        {offers.map((offer) =>
          <PlaceCard
            key = {offer.id}
            offer = {offer}
            handleTitlePlaceClick = {handleTitlePlaceClick}
            hadleArticleMoveMouse = {this._hadleArticleMoveMouse}
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
  offers: PropTypes.array.isRequired,
  handleTitlePlaceClick: PropTypes.func.isRequired,
};
