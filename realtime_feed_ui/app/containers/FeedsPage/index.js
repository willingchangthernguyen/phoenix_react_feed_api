/**
 *
 * FeedsPage
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { fetchFeedsRequest } from './actions';
import { makeSelectFeedsPage, hasNewFeeds } from './selectors';
import reducer from './reducer';
import saga from './saga';
function feedsNode() {
  return [...this.props.feeds].reverse().map(feed => (
    <div className="col-12" key={feed.id}>
      <div className="card" style={{ margin: '15px 0' }}>
        <div className="card-block">
          <h3 className="card-title">{feed.title}</h3>
          <p className="card-text">{feed.description}</p>
        </div>
      </div>
    </div>
  ));
}
export function FeedsPage(props) {
  useInjectReducer({ key: 'feedsPage', reducer });
  useInjectSaga({ key: 'feedsPage', saga });
  useEffect(() => {
    props.fetchFeedsRequest();
  }, [props.hasNewFeeds]);
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return <div className="row">{feedsNode()}</div>;
}

FeedsPage.propTypes = {
  hasNewFeeds: hasNewFeeds(),
};

const mapStateToProps = createStructuredSelector({
  feedsPage: makeSelectFeedsPage(),
  hasNewFeeds: hasNewFeeds(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchFeedsRequest: () => dispatch(fetchFeedsRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FeedsPage);
