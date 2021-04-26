import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as guestAPI from '../lib/api/guest';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_GUESTS,
    LIST_GUESTS_SUCCESS,
    LIST_GUESTS_FAILURE,
  ] = createRequestActionTypes('guests/LIST_GUESTS');

export const list = createAction(
    LIST_GUESTS,
    ({ guestname, page }) => ({ guestname, page }),
);

const listGuestsSaga = createRequestSaga(LIST_GUESTS, guestAPI.list);

export function* guestsSaga() {
    yield takeLatest(LIST_GUESTS, listGuestsSaga);
}
const initialState = {
    guests: null,
    error: null,
    lastPage: 1,
  };

  const guests = handleActions(
    {
      [LIST_GUESTS_SUCCESS]: (state, { payload: guests, meta: response }) => ({
        ...state,
        guests,
        lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
      }),
      [LIST_GUESTS_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      })
    },
    initialState,
  );
  
  export default guests;
  