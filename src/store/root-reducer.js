import {combineReducers} from 'redux';
import {cityReducer} from './city-reducer/city-reducer.js';
import {reducerData} from './data-reducer/data-reducer.js';
import {NameSpace} from "./name-space.js";

export const rootReducer = combineReducers({
  [NameSpace.CITY]: cityReducer,
  [NameSpace.DATA]: reducerData,
});

