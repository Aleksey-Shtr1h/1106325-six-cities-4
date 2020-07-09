import React, {PureComponent} from "react";
import {connect} from 'react-redux';

import {PlaceCard} from "../place-card/place-card.jsx";

import {propsTypeAll} from "../../propsType/propsType.js";

export class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onTitlePlaceClick, offersActive, onCardPlaceHoverMove} = this.props;

    return (
      <React.Fragment>
        {offersActive.map((offer, index) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
            onTitlePlaceClick={onTitlePlaceClick}
            index={index}
            onCardPlaceHoverMove={onCardPlaceHoverMove}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offersActive: state.offersActive,
  };
};

export const WrapperPlacesList = connect(mapStateToProps, null)(PlacesList);

PlacesList.propTypes = {
  offers: propsTypeAll.offers,
  offersActive: propsTypeAll.offers,
  onTitlePlaceClick: propsTypeAll.onTitlePlaceClick,
  onCardPlaceHoverMove: propsTypeAll.func,
};
