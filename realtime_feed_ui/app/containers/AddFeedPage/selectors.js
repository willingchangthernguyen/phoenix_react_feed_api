import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addFeedPage state domain
 */

const selectAddFeedPageDomain = state => state.addFeedPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddFeedPage
 */

export const title = () =>
  createSelector(
    selectAddFeedPageDomain(),
    titleState =>
      titleState
        .get('feed')
        .get('data')
        .get('title'),
  );

export const description = () =>
  createSelector(
    selectAddFeedPageDomain(),
    titleState =>
      titleState
        .get('feed')
        .get('data')
        .get('description'),
  );

export const error = () =>
  createSelector(
    selectAddFeedPageDomain(),
    errorState =>
      errorState
        .get('feed')
        .get('ui')
        .get('error'),
  );

export const saving = () =>
  createSelector(
    selectAddFeedPageDomain(),
    savingState =>
      savingState
        .get('feed')
        .get('ui')
        .get('saving'),
  );
