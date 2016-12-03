export default function postsReducer(state=[], action) {

  switch ( action.type ) {
    case 'FETCH_POSTS':
      return action.payload;

    case 'ADD_POST':
      return [action.payload, ...state]

    default:
      return state;
  }
};
