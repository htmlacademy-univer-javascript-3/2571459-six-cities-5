// rootReducer.ts
import {combineReducers} from '@reduxjs/toolkit';
import {appStateReducer} from './reducers/appStateReducer.ts';
import {offersReducer} from './reducers/offersReducer.ts';

export const rootReducer = combineReducers({
  app: appStateReducer,
  offers: offersReducer
});
