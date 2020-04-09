import { call, put, take, cancel, takeLatest, fork } from 'redux-saga/effects';
import request from 'utils/request';
import {
  connectToSocket,
  joinChannel,
  createSocketChannel,
  handleUpdatedData,
} from 'utils/socketSagas';
import { fetchFeeds, fetchFeedsError, checkForNewFeeds } from './actions';
import {
  FETCH_FEEDS_REQUEST,
  HAS_NEW_FEEDS,
  LOCATION_CHANGE,
  FETCH_FEEDS_SUCCESS,
} from './constants';
function* getFeeds() {
  const requestURL = 'http://localhost:4000/api/feeds';

  try {
    // Call our request helper (see 'utils/Request')
    const feeds = yield call(request, requestURL);
    yield put(fetchFeeds(feeds));
  } catch (err) {
    yield put(fetchFeedsError(err));
  }
}
export function* watchGetFeeds() {
  const watcher = yield takeLatest(FETCH_FEEDS_REQUEST, getFeeds);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* connectWithFeedsSocketForNewFeeds() {
  const socket = yield call(connectToSocket);
  const channel = yield call(joinChannel, socket, 'feeds');

  const socketChannel = yield call(
    createSocketChannel,
    channel,
    HAS_NEW_FEEDS,
    checkForNewFeeds,
  );

  while (true) {
    const action = yield take(socketChannel);
    yield fork(handleUpdatedData, action);
  }
}
export function* watchConnectWithFeedsSocketForNewFeeds() {
  const watcher = yield takeLatest(
    FETCH_FEEDS_SUCCESS,
    connectWithFeedsSocketForNewFeeds,
  );

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
