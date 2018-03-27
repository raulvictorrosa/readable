import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS,
  ADD_POST,
  FETCH_POST_BY_ID,
  // VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_POST,
} from '../actions/constants'

export const getPosts = posts => ({
  type: FETCH_POSTS,
  posts
})

// export const fetchPosts = () => (dispatch) =>
//   API.fetchPosts()
//     .then(posts =>
//       Promise.all(
//         posts.map(post =>
//           API.fetchComments(post.id)
//             .then(comments => (post.comments = comments))
//             .then(() => post)
//         )
//       )
//     )
//     .then(posts => dispatch(fetchPostById(FETCH_POSTS, posts)))

// export const fetchPostById = (actionType, posts) => ({
//   type: FETCH_POSTS,
//   posts
// })

// export const fetchPostsByCategory = (category) =>
//   API.fetchPostsByCategory(category)
//     .then(posts => dispatch({ type: FETCH_POSTS_BY_CATEGORY, posts }))

// export const addPost = (post) =>
//   API.addPost(post)
//     .then((posts) => dispatch({ type: ADD_POST, post }))

// export const fetchPostById = (id) =>
//   API.fetchPostById(id)
//     .then(posts => dispatch({ type: FETCH_POST_BY_ID, posts }))

// export const votePost = (postId, option) => {
//   return (dispatch) => {
//     API.votePost(postId, option).then(post => {
//       dispatch({ type: VOTE_POST, postId, option })
//     })
//   }
// }

// export const editPost = (postId, title, body, callback) => {
//   return (dispatch) => {
//     API.editPost(postId, title, body).then(updatedPost => {
//       dispatch({ type: EDIT_POST, updatedPost, postId })
//     }).then(() => callback())
//   }
// }

// export const deletePost = (postId, callback) => {
//   return dispatch => {
//     API.deletePost(postId).then(() => callback())
//     dispatch({ type: DELETE_POST, postId })
//   }
// }

// export const sortPost = (sortKey) => {
//   return dispatch => {
//     dispatch({ type: SORT_POST, sortKey })
//   }
// }
