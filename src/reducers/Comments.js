import {
  /* ADD_COMMENT, */
  /* DELETE_COMMENT, */
  /* FETCH_COMMENT, */
  /* VOTE_COMMENT, */
  /* EDIT_COMMENT, */
  FETCH_COMMENTS
} from '../actions/Constants';

const comments = (state = [], action) => {
  // const { comments, commentId, parentId, updatedComment } = action
  switch (action.type) {
    case FETCH_COMMENTS:
      return [ ...action.comments ]

    // case ADD_COMMENT:
    //   return Object.assign({}, state, { [parentId]: comments })

    //TODO: Add reducer to FETCH_COMMENT

    // case VOTE_COMMENT:
    //   return {
    //     ...state,
    //     [parentId]: state[parentId].map(comment => {
    //       if (comment.id === commentId) {
    //         comment = updatedComment
    //       }
    //       return comment
    //     })
    //   }

    // case EDIT_COMMENT:
    //   return {
    //     ...state,
    //     [parentId]: state[parentId].map(comment => {
    //       if (comment.id === commentId) {
    //         comment = updatedComment
    //       }
    //       return comment
    //     })
    //   }

    // case DELETE_COMMENT:
    //   return state

    default:
      return state
  }
}

export default comments
