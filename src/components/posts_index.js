import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      showCommentsPostId: [],
      showRepliesCommentId: null,
      showNewCommentPostId: null,
      showNewReplyCommentId: null
    });
    this.showComments = this.showComments.bind(this)
    this.showReplies = this.showReplies.bind(this)
    this.showNewComment = this.showNewComment.bind(this)
    this.showNewReply = this.showNewReply.bind(this)
  }

  showComments(commentsToShow){
    this.setState({ showCommentsPostId: [ ...this.state.showCommentsPostId, commentsToShow]});
  }

  showReplies(repliesToShow){
    this.setState({ showRepliesCommentId: repliesToShow});
  }

  showNewComment(newCommentToShow){
    this.setState({ showNewCommentPostId: newCommentToShow});
  }

  showNewReply(newReplyToShow){
    this.setState({ showNewReplyCommentId: newReplyToShow});
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
                  <li className="list-group-item" onClick={ ()=>this.showComments(post.id) }>
                    SHOW COMMENTS
                  </li> : null
                }

                { this.state.showCommentsPostId.includes(post.id) ?

                  <div>
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
                  </div>

                : null }

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
