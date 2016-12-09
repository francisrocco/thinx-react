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

    default:
      return state;
  }
};
