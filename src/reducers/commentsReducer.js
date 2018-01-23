import * as Types from '../actions/actionTypes'

function comments(state = {}, action) {
  const { comments, commentId, parentId, updatedComment } = action
  switch (action.type) {
    case Types.FETCH_COMMENTS:
      return Object.assign({}, state, { [parentId]: comments })

    case Types.ADD_COMMENT:
      return Object.assign({}, state, { [parentId]: comments })

    //TODO: Add reducer to FETCH_COMMENT

    case Types.VOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }

    case Types.EDIT_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }

    case Types.DELETE_COMMENT:
      return state

    default:
      return state
  }
}

export default comments
