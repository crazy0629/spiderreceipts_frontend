import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { singleReducer as single } from './single';

export const store = configureStore({
  reducer: combineReducers({ single }),
});
