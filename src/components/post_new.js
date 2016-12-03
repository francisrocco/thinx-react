import React, { Component } from 'react';
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class PostNew extends React.Component {
  constructor(props) {
    super(props)
    this.newPostHandler = this.newPostHandler.bind(this)
  }

  newPostHandler(event) {
    event.preventDefault()
    const newPost = {title: this.refs.title.value, content: this.refs.content.value}
    this.props.actions.addPost(newPost)
    browserHistory.push(`/posts/`)
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.newPostHandler}>
          <div className="panel panel-primary form-group">

            <div className="panel-heading">
              <input type="text" className="form-control" placeholder="title" ref='title' />
            </div>

            <div className="panel-body">
              <input type="text" className="form-control" placeholder="content" ref='content' />
            </div>

            <button type="submit" className="btn btn-primary center-block">Submit</button>
            <br/>
          </div>
        </form>
      </div>
    )
}
}

function mapDispatchToProps(dispatch) {
return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(PostNew);
