import React from 'react';
import {Link} from 'react-router-dom';

import {propsTypeAll} from '../../propsType/propsType.js';

export const CitiesItem = (props) => {
  const {onMenuCityClick, cityActive, cityName, citiesAll} = props;

  return (
    <li className="locations__item">

      <Link
        onClick={() => onMenuCityClick(cityName, citiesAll)}

        className={`locations__item-link tabs__item
        ${cityActive === cityName ? `tabs__item--active` : ``}`}

        to={{pathName: `/`}}
      >

        <span>{cityName}</span>
      </Link>

    </li>
  );
};

CitiesItem.propTypes = {
  cityName: propsTypeAll.cityName,
  onMenuCityClick: propsTypeAll.onMenuCityClick,
  cityActive: propsTypeAll.cityActive,
  citiesAll: propsTypeAll.citiesAll,
};
