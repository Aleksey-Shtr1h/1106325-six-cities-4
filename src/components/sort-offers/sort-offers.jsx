import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ActionCreatorData} from '../../store/data-action/data-action.js';
import {getOffersActive, getActiveSort} from '../../store/data-reducer/data-selectors.js';

import {propsTypeAll} from "../../propsType/propsType.js";

const SortOptions = [
  {
    name: `Popular`,
    value: `popular`
  },
  {
    name: `Price: low to high`,
    value: `to-high`
  },
  {
    name: `Price: high to low`,
    value: `to-low`
  },
  {
    name: `Top rated first`,
    value: `top-rated`
  },
];

export const SortOffers = ({activeSort, onSortingOffersChange, offersActive, offersOriginal}) => {
  return (
    <form className="places__sorting" action="#" method="get">

      <span className="places__sorting-caption">Sort by</span>

      <select
        className="places__sorting-type"
        id={activeSort}
        value={activeSort}
        onChange={(evt) =>
          onSortingOffersChange(evt.target.value, offersActive, offersOriginal)
        }
      >

        {SortOptions.map((sortOption) =>
          <option
            className="places__option"
            value={sortOption.value}
            key={sortOption.name + sortOption.value}
          >
            {sortOption.name}
          </option>
        )}
      </select>

    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    activeSort: getActiveSort(state),
    offersActive: getOffersActive(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortingOffersChange: bindActionCreators(ActionCreatorData.actionSortingOffersChange, dispatch),
  };
};

export const WrapperSortOffers = connect(mapStateToProps, mapDispatchToProps)(SortOffers);

SortOffers.propTypes = {
  activeSort: propsTypeAll.string,
  onSortingOffersChange: propsTypeAll.func,
  offersActive: propsTypeAll.offers,
  offersOriginal: propsTypeAll.offers,
};
