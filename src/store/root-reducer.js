import {combineReducers} from 'redux';
import {dataReducer} from './data-reducer/data-reducer.js';
import {appReducer} from './app-reducer/app-reducer.js';
import {reducerUser} from './user-reducer/user-reducer.js';
import {NameSpace} from "./name-space.js";

export const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.APP]: appReducer,
  [NameSpace.USER]: reducerUser,
});

