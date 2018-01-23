import * as API from '../utils/ReadbleAPI'
import * as Types from './actionTypes'

export const fetchPostsByCategory = (category) => {
  return (dispatch) => {
    API.fetchPostsByCategory(category).then(posts => {
      dispatch({ type: Types.FETCH_POSTS_BY_CATEGORY, posts })
    })
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    API.fetchPosts().then(posts => {
      dispatch({ type: Types.FETCH_POSTS, posts })
    })
  }
}

export const addPost = (post, callback) => {
  return (dispatch) => {
    API.addPost(post).then(() => callback())
    dispatch({ type: Types.ADD_POST, post })
  }
}

export const fetchPostById = (id) => {
  return (dispatch) => {
    API.fetchPostById(id).then(posts => {
      dispatch({ type: Types.FETCH_POST_BY_ID, posts })
    })
  }
}

export const votePost = (postId, option) => {
  return (dispatch) => {
    API.votePost(postId, option).then(post => {
      dispatch({ type: Types.VOTE_POST, postId, option })
    })
  }
}

export const editPost = (postId, title, body, callback) => {
  return (dispatch) => {
    API.editPost(postId, title, body).then(updatedPost => {
      dispatch({ type: Types.EDIT_POST, updatedPost, postId })
    }).then(() => callback())
  }
}

export const deletePost = (postId, callback) => {
  return dispatch => {
    API.deletePost(postId).then(() => callback())
    dispatch({ type: Types.DELETE_POST, postId })
  }
}

export const sortPost = (sortKey) => {
  return dispatch => {
    dispatch({ type: Types.SORT_POST, sortKey })
  }
}
