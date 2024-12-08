import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {api} from '../api/api.ts';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
