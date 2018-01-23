import * as API from '../utils/ReadbleAPI'
import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS,
  ADD_POST,
  FETCH_POST_BY_ID,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_POST,
} from './actionTypes'

export const fetchPostsByCategory = (category) => {
  return (dispatch) => {
    API.fetchPostsByCategory(category).then(posts => {
      dispatch({ type: FETCH_POSTS_BY_CATEGORY, posts })
    })
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    API.fetchPosts().then(posts => {
      dispatch({ type: FETCH_POSTS, posts })
    })
  }
}

export const addPost = (post, callback) => {
  return (dispatch) => {
    API.addPost(post).then(() => callback())
    dispatch({ type: ADD_POST, post })
  }
}

export const fetchPostById = (id) => {
  return (dispatch) => {
    API.fetchPostById(id).then(posts => {
      dispatch({ type: FETCH_POST_BY_ID, posts })
    })
  }
}

export const votePost = (postId, option) => {
  return (dispatch) => {
    API.votePost(postId, option).then(post => {
      dispatch({ type: VOTE_POST, postId, option })
    })
  }
}

export const editPost = (postId, title, body, callback) => {
  return (dispatch) => {
    API.editPost(postId, title, body).then(updatedPost => {
      dispatch({ type: EDIT_POST, updatedPost, postId })
    }).then(() => callback())
  }
}

export const deletePost = (postId, callback) => {
  return dispatch => {
    API.deletePost(postId).then(() => callback())
    dispatch({ type: DELETE_POST, postId })
  }
}

export const sortPost = (sortKey) => {
  return dispatch => {
    dispatch({ type: SORT_POST, sortKey })
  }
}
