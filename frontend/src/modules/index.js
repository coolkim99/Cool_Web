import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import guest, { guestSaga } from './guest';
import guests, {guestsSaga} from './guests';
import loading from './loading';

const rootReducer = combineReducers({
    guest,
    guests,
    loading
  });
  
  export function* rootSaga() {
    yield all([guestSaga(), guestsSaga()]);
  }
  
  export default rootReducer;