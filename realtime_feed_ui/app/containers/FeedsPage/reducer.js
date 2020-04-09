/*
 *
 * FeedsPage reducer
 *
 */
import { List, fromJS } from 'immutable';
import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_ERROR,
  HAS_NEW_FEEDS,
} from './constants';
export const initialState = fromJS({
  feeds: {
    data: List(),
    ui: {
      loading: false,
      error: false,
    },
  },
  metadata: {
    hasNewFeeds: false,
  },
});
function addFeedPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FEEDS_REQUEST:
      return state
        .setIn(['feeds', 'ui', 'loading'], true)
        .setIn(['feeds', 'ui', 'error'], false);
    case FETCH_FEEDS_SUCCESS:
      return state
        .setIn(['feeds', 'data'], action.feeds.data)
        .setIn(['feeds', 'ui', 'loading'], false)
        .setIn(['metadata', 'hasNewFeeds'], false);
    case FETCH_FEEDS_ERROR:
      return state
        .setIn(['feeds', 'ui', 'error'], action.error)
        .setIn(['feeds', 'ui', 'loading'], false);
    case HAS_NEW_FEEDS:
      return state.setIn(['metadata', 'hasNewFeeds'], true);
    default:
      return state;
  }
}
export default addFeedPageReducer;
