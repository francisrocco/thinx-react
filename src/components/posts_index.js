import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      showCommentsPostId: [],
      showRepliesCommentId: [],
      showNewCommentPostId: null,
      showNewReplyCommentId: null
    });
    this.showComments = this.showComments.bind(this)
    this.showReplies = this.showReplies.bind(this)
    this.showNewComment = this.showNewComment.bind(this)
    this.showNewReply = this.showNewReply.bind(this)
    this.newCommentHandler = this.newCommentHandler.bind(this)
  }

  showComments(commentsToShow){
    this.setState({ showCommentsPostId: [ ...this.state.showCommentsPostId, commentsToShow]});
  }

  showReplies(repliesToShow){
    this.setState({ showRepliesCommentId: [ ...this.state.showRepliesCommentId, repliesToShow]});
  }

  showNewComment(newCommentToShow){
    this.setState({ showNewCommentPostId: newCommentToShow});
  }

  showNewReply(newReplyToShow){
    this.setState({ showNewReplyCommentId: newReplyToShow});
  }

  newCommentHandler(event) {
    event.preventDefault()
    const newComment = {content: this.refs.content.value, post_id: this.refs.post_id.value}
    this.props.actions.addComment(newComment)
    this.refs.content.value = ""
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
                <b>{post.content}</b>
              </div>

              <ul className="list-group">

                {(post.comments.length > 0) && !this.state.showCommentsPostId.includes(post.id) ?
                  <li className="list-group-item" onClick={ ()=>this.showComments(post.id) }>
                    SHOW COMMENTS
                  </li> : null
                }

                { this.state.showCommentsPostId.includes(post.id) ?

                  <div>
                    {post.comments.map((comment =>

                      <li className="list-group-item">
                        {comment.content}

                        {(comment.replies.length > 0) && !this.state.showRepliesCommentId.includes(comment.id) ?
                          <div className="reply" onClick={ ()=>this.showReplies(comment.id) }>
                            show replies
                          </div> : null
                        }

                        { this.state.showRepliesCommentId.includes(comment.id) ?

                          <div>
                            <ul>
                              {comment.replies.map((reply =>
                                <li> {reply.content} </li>
                              ))}
                            </ul>
                          </div>

                        : null }

                        { this.state.showNewReplyCommentId != comment.id ?

                          <div className="reply" onClick={ ()=>this.showNewReply(comment.id) }>
                            add reply
                          </div>

                          :

                          <form onSubmit={this.newReplyHandler}>
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="new reply" ref="content" />
                              <input type="hidden" ref="comment_id" value= {comment.id} />
                              <span className="input-group-btn">
                                <button className="btn btn-primary" type="submit">Go!</button>
                              </span>
                            </div>
                          </form>

                         }

                      </li>

                    ))}
                  </div>

                : null }

                { this.state.showNewCommentPostId != post.id ?

                  <li className="list-group-item" onClick={ ()=>this.showNewComment(post.id) }>
                    ADD A COMMENT
                  </li>

                  :

                  <li className="list-group-item">
                    <form onSubmit={this.newCommentHandler}>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="new comment" ref="content" />
                        <input type="hidden" ref="post_id" value= {post.id} />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="submit">Go!</button>
                        </span>
                      </div>
                    </form>
                  </li>

                 }

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
