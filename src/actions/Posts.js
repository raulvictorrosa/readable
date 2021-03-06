import { fetchPostsByCategory, fetchPostById, fetchPosts, votePost } from '../api/Posts';
import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS,
  // ADD_POST,
  FETCH_POST_BY_ID, VOTE_POST,
  // EDIT_POST,
  // DELETE_POST,
  // SORT_POST,
} from './Constants'

export const getPosts = () => dispatch =>
  fetchPosts().then(posts => dispatch({
    type: FETCH_POSTS,
    posts
  }))

export const getPostById = id => dispatch =>
  fetchPostById(id).then(post => dispatch({
    type: FETCH_POST_BY_ID,
    post
  }))

export const getPostsByCategory = category => dispatch =>
  fetchPostsByCategory(category).then(posts => dispatch({
    type: FETCH_POSTS_BY_CATEGORY,
    posts
  }))

// export const addPost = (post) =>
//   API.addPost(post)
//     .then((posts) => dispatch({ type: ADD_POST, post }))

// export const fetchPostById = (id) =>
//   API.fetchPostById(id)
//     .then(posts => dispatch({ type: FETCH_POST_BY_ID, posts }))

export const votePostCount = (id, option) => dispatch =>
  votePost(id, option).then(post => dispatch({
    type: VOTE_POST,
    post
  }))

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
