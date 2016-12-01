import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <ul>
          {this.props.posts.map((post) =>
          <li>
            {post.title}
          </li>
        )}
        </ul>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(PostsIndex);
