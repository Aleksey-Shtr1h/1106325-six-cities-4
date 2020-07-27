import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CitiesItem} from '../cities-item/cities-item.jsx';
import {getNameCities, getCitiesAll} from '../../store/data-reducer/data-selectors.js';

import {ActionCreatorData} from '../../store/data-action/data-action.js';

import {propsTypeAll} from "../../propsType/propsType.js";

export const CitiesList = ({nameCities, cityActive, onMenuCityClick, citiesAll}) => {

  return (
    <ul className="locations__list tabs__list">

      {nameCities.slice(0, 6).map((cityName, id) =>
        <CitiesItem
          key={cityName + id}
          cityName={cityName}
          onMenuCityClick={onMenuCityClick}
          cityActive={cityActive}
          citiesAll={citiesAll}
        />
      )}

    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    // citiesAll: state.DATA.citiesAll,
    // nameCities: state.DATA.nameCities,
    citiesAll: getCitiesAll(state),
    nameCities: getNameCities(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuCityClick: bindActionCreators(ActionCreatorData.actionCity, dispatch),
  };
};

export const WrapperCitiesList = connect(mapStateToProps, mapDispatchToProps)(CitiesList);

CitiesList.propTypes = {
  nameCities: propsTypeAll.nameCities,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  cityActive: propsTypeAll.cityActive,
  citiesAll: propsTypeAll.citiesAll,
};
