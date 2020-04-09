/*
 *
 * AddFeedPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_ATTRIBUTES,
  SAVE_FEED_REQUEST,
  SAVE_FEED_SUCCESS,
  SAVE_FEED_ERROR,
} from './constants';

export const initialState = fromJS({
  feed: {
    data: {
      title: '',
      description: '',
    },
    ui: {
      saving: false,
      error: null,
    },
  },
});
function addFeedPageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ATTRIBUTES:
      return state
        .setIn(['feed', 'data', 'title'], action.attributes.title)
        .setIn(['feed', 'data', 'description'], action.attributes.description);
    case SAVE_FEED_REQUEST:
      return state
        .setIn(['feed', 'ui', 'saving'], true)
        .setIn(['feed', 'ui', 'error'], false);
    case SAVE_FEED_SUCCESS:
      return state
        .setIn(['feed', 'data', 'title'], '')
        .setIn(['feed', 'data', 'description'], '')
        .setIn(['feed', 'ui', 'saving'], false);
    case SAVE_FEED_ERROR:
      return state
        .setIn(['feed', 'ui', 'error'], action.error)
        .setIn(['feed', 'ui', 'saving'], false);
    default:
      return state;
  }
}
export default addFeedPageReducer;
