import React, {PureComponent} from "react";
import {connect} from 'react-redux';

import {PlaceCard} from "../place-card/place-card.jsx";
// import {getOffersActive} from '../../store/data-reducer/data-selectors.js';

import {propsTypeAll} from "../../propsType/propsType.js";

import {ActionCreatorApp} from '../../store/app-action/app-action.js';
import {OperationApp} from '../../store/app-reducer/app-reducer.js';
import {OperationData} from '../../store/data-reducer/data-reducer.js';

export class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onTitlePlaceClick, offersActive, onCardPlaceHoverMove, onFavoriteBtnClick, cityActive} = this.props;

    return (
      <React.Fragment>
        {offersActive.map((offer, index) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
            onTitlePlaceClick={onTitlePlaceClick}
            index={index}
            onCardPlaceHoverMove={onCardPlaceHoverMove}
            onFavoriteBtnClick={onFavoriteBtnClick}
            cityActive={cityActive}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityActive: state.DATA.cityActive,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onTitlePlaceClick(offer) {
    dispatch(OperationApp.loadComments(offer));
    dispatch(OperationData.loadNearbyOffers(offer));
  },

  onCardPlaceHoverMove(offer) {
    dispatch(ActionCreatorApp.actionChangePinMapHoverCard(offer));
  },

  onFavoriteBtnClick(offer, cityActive) {
    dispatch(OperationData.postFavorite(offer, cityActive));
  },
});

export const WrapperPlacesList = connect(mapStateToProps, mapDispatchToProps)(PlacesList);

PlacesList.propTypes = {
  offers: propsTypeAll.offers,
  offersActive: propsTypeAll.offers,
  onTitlePlaceClick: propsTypeAll.onTitlePlaceClick,
  onCardPlaceHoverMove: propsTypeAll.func,
  onFavoriteBtnClick: propsTypeAll.func,
};
