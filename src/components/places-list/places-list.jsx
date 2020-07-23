import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {PlaceCard} from "../place-card/place-card.jsx";

import {propsTypeAll} from "../../propsType/propsType.js";

import {ActionCreator} from '../../store/city-action/city-action.js';

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
    offersActive: state.DATA.offersActive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitlePlaceClick: bindActionCreators(ActionCreator.actionTitleClick, dispatch),
    onCardPlaceHoverMove: bindActionCreators(ActionCreator.actionChangePinMapHoverCard, dispatch),
  };
};

export const WrapperPlacesList = connect(mapStateToProps, mapDispatchToProps)(PlacesList);

PlacesList.propTypes = {
  offers: propsTypeAll.offers,
  offersActive: propsTypeAll.offers,
  onTitlePlaceClick: propsTypeAll.onTitlePlaceClick,
  onCardPlaceHoverMove: propsTypeAll.func,
};
