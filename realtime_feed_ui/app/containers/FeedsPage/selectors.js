import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the feedsPage state domain
 */

const selectFeedsPageDomain = state => state.feedsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FeedsPage
 */

export const makeSelectFeedsPage = () =>
  createSelector(
    selectFeedsPageDomain,
    substate => substate,
  );
export const feeds = () =>
  createSelector(
    selectFeedsPageDomain(),
    titleState => titleState.get('feeds').get('data'),
  );

export const error = () =>
  createSelector(
    selectFeedsPageDomain(),
    errorState =>
      errorState
        .get('feeds')
        .get('ui')
        .get('error'),
  );

export const isLoading = () =>
  createSelector(
    selectFeedsPageDomain(),
    loadingState =>
      loadingState
        .get('feeds')
        .get('ui')
        .get('loading'),
  );

export const hasNewFeeds = () =>
  createSelector(
    selectFeedsPageDomain(),
    newFeedsState => newFeedsState.get('metadata').get('hasNewFeeds'),
  );

export { selectFeedsPageDomain };
