/*
 *
 * FeedsPage actions
 *
 */

import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_ERROR,
  HAS_NEW_FEEDS,
} from './constants';

export const fetchFeedsRequest = () => ({
  type: FETCH_FEEDS_REQUEST,
});

export const fetchFeeds = feeds => ({
  type: FETCH_FEEDS_SUCCESS,
  feeds,
});

export const fetchFeedsError = error => ({
  type: FETCH_FEEDS_ERROR,
  error,
});

export const checkForNewFeeds = () => ({
  type: HAS_NEW_FEEDS,
});
