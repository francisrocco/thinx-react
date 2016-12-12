export default function postsReducer(state=[], action) {

  switch ( action.type ) {
    case 'FETCH_POSTS':
      return action.payload;

    case 'ADD_POST':
      return [action.payload, ...state]

    case 'ADD_COMMENT':
      const post = state.find((post) => post.id == action.payload.post_id)
      const commentCopyState = [...state]
      const postIndex = commentCopyState.indexOf(post)
      commentCopyState.splice(postIndex, 1)
      const copyPost = JSON.parse(JSON.stringify(post))
      copyPost.comments.push(action.payload)
      commentCopyState.splice(postIndex, 0, copyPost)
      return commentCopyState

    case 'ADD_REPLY':
      const replyPost = state.find((post) => post.comments.find((comment) => comment.id == action.payload.comment_id))
      const replyCopyState = [...state]
      const replyPostIndex = replyCopyState.indexOf(replyPost)
      replyCopyState.splice(replyPostIndex, 1)
      const copyReplyPost = JSON.parse(JSON.stringify(replyPost))
      const replyComment = copyReplyPost.comments.find((comment) => comment.id == action.payload.comment_id)
      const commentIndex = copyReplyPost.comments.indexOf(replyComment)
      copyReplyPost.comments.splice(commentIndex, 1)
      const copyReplyComment = JSON.parse(JSON.stringify(replyComment))
      copyReplyComment.replies.push(action.payload)
      copyReplyPost.comments.splice(commentIndex, 0, copyReplyComment) // push undefinded
      replyCopyState.splice(replyPostIndex, 0, copyReplyPost)
      return replyCopyState

    default:
      return state;
  }
};
