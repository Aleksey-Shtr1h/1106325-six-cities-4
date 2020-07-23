import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ActionCreator} from '../../store/city-action/city-action.js';

import {CitiesItem} from '../cities-item/cities-item.jsx';

import {propsTypeAll} from "../../propsType/propsType.js";

export const CitiesList = ({nameCities, onMenuCityClick, cityActive}) => {
  return (
    <ul className="locations__list tabs__list">

      {nameCities.slice(0, 6).map((cityName, id) =>
        <CitiesItem
          key={cityName + id}
          cityName={cityName}
          onMenuCityClick={onMenuCityClick}
          cityActive={cityActive}
        />
      )}

    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    nameCities: state.DATA.nameCities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuCityClick: bindActionCreators(ActionCreator.actionCity, dispatch),
  };
};

export const WrapperCitiesList = connect(mapStateToProps, mapDispatchToProps)(CitiesList);

CitiesList.propTypes = {
  nameCities: propsTypeAll.nameCities,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  cityActive: propsTypeAll.cityActive,
};
