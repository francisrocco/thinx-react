import React, { Component } from 'react';
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class PostNew extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        NEW POST
      </div>
    )
}
}

function mapDispatchToProps(dispatch) {
return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(PostNew);
