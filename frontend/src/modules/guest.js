import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as guestAPI from '../lib/api/guest';
import createRequestSaga, {
    createRequestActionTypes,
  } from '../lib/createRequestSaga';

const INITIALIZE = 'guest/INITIALIZE';
const CHANGE_FIELD = 'guest/CHANGE_FIELD';
const SET_ORIGINAL_GUEST = 'guest/SET_ORIGINAL_GUEST';
const [
    GUEST_WRITE,
    GUEST_WRITE_SUCCESS,
    GUEST_WRITE_FAILURE,
] = createRequestActionTypes('guest/GUEST_WRITE');

/*
const [
    GUEST_UPDATE,
    GUEST_UPDATE_SUCCESS,
    GUEST_UPDATE_FAILURE,
] = createRequestActionTypes('guest/GUEST_UPDATE');  //포스트 수정
*/

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const writeGuest = createAction(GUEST_WRITE, ({ guestname, text, password }) => ({
    guestname,
    text,
    password
}));
export const setOriginalGuest = createAction(SET_ORIGINAL_GUEST, guest => guest);

// saga 생성
const writeGuestSaga = createRequestSaga(GUEST_WRITE, guestAPI.write);


export function* guestSaga() {
  yield takeLatest(GUEST_WRITE, writeGuestSaga);
}

const initialState = {
  guestname: '',
  text: '',
  password: '',
  guest: null,
  guestError: null,
};

const guest = handleActions(
    {
      [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
      [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value, // 특정 key 값을 업데이트
      }),
      [GUEST_WRITE]: state => ({
        ...state,
        guest: null,
        guestError: null,
      }),
      // 방명록 작성 성공
      [GUEST_WRITE_SUCCESS]: (state, { payload: guest }) => ({
        ...state,
        guest,
      }),
      // 방명록 작성 실패
      [GUEST_WRITE_FAILURE]: (state, { payload: guestError }) => ({
        ...state,
        guestError,
      }),
      [SET_ORIGINAL_GUEST]: (state, {payload: guest}) => ({
         ...state,
         guestname: guest.guestname,
         text: guest.text,
         password: guest.password,
         originalGuestId: guest._id, 
      }),
    },
    initialState,
  );
  
  export default guest;