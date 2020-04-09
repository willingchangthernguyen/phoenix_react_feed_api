/**
 *
 * AddFeedPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Form from './sub-components/Form';
import { updateAttributes, saveFeedRequest } from './actions';
export function AddFeedPage(props) {
  return (
    <div>
      <Form
        onChange={val => props.updateAttributes(val)}
        onSave={() => props.saveFeedRequest()}
        saving={props.saving}
      />
    </div>
  );
}

AddFeedPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    updateAttributes: val => dispatch(updateAttributes(val)),
    saveFeedRequest: () => dispatch(saveFeedRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddFeedPage);
