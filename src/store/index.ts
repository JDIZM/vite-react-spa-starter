import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import photosReducer from "./slices/photos";
// ...
// https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photos: photosReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counter: CounterState, photos: PhotosState}
export type AppDispatch = typeof store.dispatch;
