/*
 *
 * AddFeedPage actions
 *
 */
import {
  UPDATE_ATTRIBUTES,
  SAVE_FEED_REQUEST,
  SAVE_FEED_SUCCESS,
  SAVE_FEED_ERROR,
} from './constants';
export const updateAttributes = attributes => ({
  type: UPDATE_ATTRIBUTES,
  attributes,
});

export const saveFeedRequest = () => ({
  type: SAVE_FEED_REQUEST,
});

export const saveFeed = () => ({
  type: SAVE_FEED_SUCCESS,
});

export const saveFeedError = error => ({
  type: SAVE_FEED_ERROR,
  error,
});
