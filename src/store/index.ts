import {configureStore} from '@reduxjs/toolkit';

import {api} from '@api';
import {reducer} from '@store-reducer';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
