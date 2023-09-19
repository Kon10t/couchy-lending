import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { couchlyReducer } from './couchlyReducer';

export const store = configureStore({
  reducer: {
    couchly: couchlyReducer 
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>