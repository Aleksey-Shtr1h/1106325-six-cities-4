import React from 'react';
import {connect} from 'react-redux';

// import {bindActionCreators} from 'redux';

import {ActionCreator} from '../../store/city-action/city-action.js';

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

const SortOffers = ({avtiveSort, onSortingOffersChange, cityOffers}) => {

  return (
    <form className="places__sorting" action="#" method="get">

      <span className="places__sorting-caption">Sort by</span>

      <select
        className="places__sorting-type"
        id={avtiveSort}
        value={avtiveSort}
        onChange={(evt) =>
          onSortingOffersChange(evt.target.value, cityOffers)
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
    avtiveSort: state.avtiveSort,
    cityOffers: state.cityOffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortingOffersChange(avtiveSort, cityOffers) {
      dispatch(ActionCreator.actionSortingOffersChange(avtiveSort, cityOffers));
    },
    // onSortingOffersChange: bindActionCreators(ActionCreator.actionSortingOffersChange, dispatch),
  };
};

export const WrapperSortOffers = connect(mapStateToProps, mapDispatchToProps)(SortOffers);

SortOffers.propTypes = {
  avtiveSort: propsTypeAll.string,
  onSortingOffersChange: propsTypeAll.func,
  cityOffers: propsTypeAll.cityOffers,
};
