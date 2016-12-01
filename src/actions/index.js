// const databaseUrl = '###.herokuapp.com/api/v1/'
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
