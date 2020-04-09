import {
  takeLatest,
  take,
  cancel,
  call,
  put,
  select,
} from 'redux-saga/effects';
import request from 'utils/request';
import { saveFeedRequest, saveFeedError } from './actions';
import { title, description } from './selectors';
import { LOCATION_CHANGE, SAVE_FEED_REQUEST } from './constants';
export function* saveFeed() {
  const title1 = yield select(title);
  const description1 = yield select(description);
  const requestURL = 'http://localhost:4000/api/feeds';

  try {
    // Call our request helper (see 'utils/Request')
    yield put(saveFeedRequest());
    yield call(request, requestURL, 'POST', {
      feed: {
        title1,
        description1,
      },
    });
  } catch (err) {
    yield put(saveFeedError(err));
  }
}
export function* watchSaveFeed() {
  const watcher = yield takeLatest(SAVE_FEED_REQUEST, saveFeed);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
