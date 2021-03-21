import { put, call, all, takeLatest } from 'redux-saga/effects';
import { searchItunes } from '../api';

export function* searchItunesSaga(data: any): any {
  try {
    const itunesData = yield call(searchItunes, data.payload);
    yield put({
      type: 'SEARCH_ITUNES_SUCCESS',
      itunesData,
    });
  } catch (e) {
    yield put({ type: 'SEARCH_ITUNES_FAILED' });
  }
}

export function* searchItunesAppendSaga(data: any): any {
  try {
    const itunesData = yield call(searchItunes, data.payload);
    yield put({
      type: 'SEARCH_ITUNES_APPEND_SUCCESS',
      itunesData,
    });
  } catch (e) {
    yield put({ type: 'SEARCH_ITUNES_FAILED' });
  }
}
function* actionWatcher() {
  yield takeLatest('SEARCH_ITUNES', searchItunesSaga);
  yield takeLatest('SEARCH_ITUNES_APPEND', searchItunesAppendSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
