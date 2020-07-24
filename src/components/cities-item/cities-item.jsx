import React from "react";

import {propsTypeAll} from "../../propsType/propsType.js";

export const CitiesItem = (props) => {
  const {onMenuCityClick, cityActive, cityName, citiesAll} = props;
  return (
    <li className="locations__item">

      <a
        onClick={() => onMenuCityClick(cityName, citiesAll)}

        className={`locations__item-link tabs__item
        ${cityActive === cityName ? `tabs__item--active` : ``}`}

        href="#">

        <span>{cityName}</span>
      </a>

    </li>
  );
};

CitiesItem.propTypes = {
  cityName: propsTypeAll.cityName,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  cityActive: propsTypeAll.cityActive,
  citiesAll: propsTypeAll.citiesAll,
};
