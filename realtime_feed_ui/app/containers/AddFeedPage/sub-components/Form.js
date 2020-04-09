import React, { memo } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

class Form extends React.Component {
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    // doing this will make the component faster
    // since it doesn't have to re-render on each state update
    this.props.onChange({
      title: this.state.title,
      description: this.state.description,
    });

    this.props.onSave();

    this.setState({
      title: '',
      description: '',
    });
  }

  render() {
    return (
      <form style={{ margin: '15px 0' }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            onChange={this.handleChange}
            name="title"
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Enter description"
            onChange={this.handleChange}
            name="description"
            value={this.state.description}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSubmit}
          disabled={
            this.props.saving || !this.state.title || !this.state.description
          }
        >
          {this.props.saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Form);
