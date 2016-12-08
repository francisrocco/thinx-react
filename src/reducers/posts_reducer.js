export default function postsReducer(state=[], action) {

  switch ( action.type ) {
    case 'FETCH_POSTS':
      return action.payload;

    case 'ADD_POST':
      return [action.payload, ...state]

    case 'ADD_COMMENT':
      const post = state.find((post) => post.id == action.payload.post_id)
      const copyState = [...state]
      const index = copyState.indexOf(post)
      copyState.splice(index, 1);
      const copyPost = JSON.parse(JSON.stringify(post))
      copyPost.comments.push(action.payload)
      copyState.unshift(copyPost)
      return copyState

    default:
      return state;
  }
};
