import API from '../api'
import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  // FETCH_COMMENT,
  // VOTE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../actions'

export const fetchComments = (postId) =>
  API.fetchComments(postId).then(comments => {
    dispatch({ type: FETCH_COMMENTS, postId, comments })
  })

export const addComment = (comment, postId, callback) => {
  return (dispatch) => {
    API.addComment(comment).then(comment => {
      dispatch({ type: ADD_COMMENT, parentId, comment })
    }).then(() => callback())
  }
}

//TODO: Add action to FETCH_COMMENT

// export const voteComment = (commentId, parentId, option) => {
//   return (dispatch) => {
//     API.voteComment(commentId, option).then(updatedComment => {
//       dispatch({ type: VOTE_COMMENT, updatedComment, commentId, parentId })
//     })
//   }
// }

export const editComment = (commentId, parentId, timestamp, body, callback) => {
  return (dispatch) => {
    API.editComment(commentId, timestamp, body)
      .then(updatedComment => {
        dispatch({ type: EDIT_COMMENT, updatedComment, commentId, parentId })
      }).then(() => callback())
  }
}

export const deleteComment = (commentId, callback) => {
  return (dispatch) => {
    API.deleteComment(commentId).then(() => callback())
    dispatch({ type: DELETE_COMMENT, commentId })
  }
}
