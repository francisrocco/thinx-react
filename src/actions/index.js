// const databaseUrl = 'https://francis-thinx-api.herokuapp.com/api/v1/'
const databaseUrl = 'http://localhost:3000/api/v1/'

export function fetchPosts(){
  const posts = fetch(`${databaseUrl}posts`, {
  }).then(response => {
    return response.json()
  }).then(postsPayload => {
    return postsPayload
  })

  return {
    type: 'FETCH_POSTS',
    payload: posts
  }
}

export function addPost(newPostFromForm) {
  const newPostFromApi = fetch(`${databaseUrl}posts`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({post: newPostFromForm})
  }).then(response => {
    return response.json()
  }).then(newPostPayload => {
    return newPostPayload
  })

  return {type: 'ADD_POST', payload: newPostFromApi}
}
