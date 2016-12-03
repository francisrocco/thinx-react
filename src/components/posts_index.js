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
      <div>
        {this.props.children}

        <div className="col-md-6 col-md-offset-3">


          <div className="feed">
            {this.props.posts.map((post) =>
            <div className="panel panel-primary">

              <div className="panel-heading">
                {post.title}
              </div>

              <div className="panel-body">
                {post.content}
              </div>

              <ul className="list-group">

                {post.comments.length > 0 ?
                  <li className="list-group-item">
                    COMMENTS
                  </li> : null
                }

                {post.comments.map((comment =>
                  <li className="list-group-item">
                    {comment.content}
                    <ul>
                      {comment.replies.map((reply =>
                        <li> {reply.content} </li>
                      ))}
                    </ul>
                  </li>
                ))}

              </ul>
            </div>
          )}
          </div>
        </div>
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
