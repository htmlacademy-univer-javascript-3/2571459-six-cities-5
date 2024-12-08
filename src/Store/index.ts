import {configureStore} from '@reduxjs/toolkit';
import {updateState} from './reducer.ts';

export const store = configureStore({
  reducer: {
    updateState: updateState
  }
});
