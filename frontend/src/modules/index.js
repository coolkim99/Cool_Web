import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import guest, { guestSaga } from './guest';

const rootReducer = combineReducers({
    guest
  });
  
  export function* rootSaga() {
    yield all([guestSaga()]);
  }
  
  export default rootReducer;