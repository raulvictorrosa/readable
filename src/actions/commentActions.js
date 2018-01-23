import * as API from '../utils/ReadbleAPI'
import * as Types from './actionTypes'

export const fetchComments = (parentId) => {
  return (dispatch) => {
    API.fetchComments(parentId).then(comments => {
      dispatch({ type: Types.FETCH_COMMENTS, parentId, comments })
    })
  }
}

export const addComment = (comment, parentId, callback) => {
  return (dispatch) => {
    API.addComment(comment).then(comment => {
      dispatch({ type: Types.ADD_COMMENT, parentId, comment })
    }).then(() => callback())
  }
}

//TODO: Add action to FETCH_COMMENT

export const voteComment = (commentId, parentId, option) => {
  return (dispatch) => {
    API.voteComment(commentId, option).then(updatedComment => {
      dispatch({ type: Types.VOTE_COMMENT, updatedComment, commentId, parentId })
    })
  }
}

export const editComment = (commentId, parentId, timestamp, body, callback) => {
  return (dispatch) => {
    API.editComment(commentId, timestamp, body)
      .then(updatedComment => {
        dispatch({ type: Types.EDIT_COMMENT, updatedComment, commentId, parentId })
      }).then(() => callback())
  }
}

export const deleteComment = (commentId, callback) => {
  return (dispatch) => {
    API.deleteComment(commentId).then(() => callback())
    dispatch({ type: Types.DELETE_COMMENT, commentId })
  }
}
