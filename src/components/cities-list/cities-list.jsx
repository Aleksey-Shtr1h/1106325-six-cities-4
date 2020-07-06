import React from "react";

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

CitiesList.propTypes = {
  nameCities: propsTypeAll.nameCities,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  cityActive: propsTypeAll.cityActive,
};
