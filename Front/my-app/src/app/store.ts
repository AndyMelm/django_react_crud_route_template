import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/counter/loginSlice';
import registerReducer from '../features/counter/registerSlice'
import crudReducer from '../features/counter/crudSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    register:registerReducer,
    CRUD:crudReducer,
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
