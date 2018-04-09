// import sortBy from 'sort-by'
import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS,
  /* ADD_POST, */
  FETCH_POST_BY_ID,
  /* EDIT_POST,
  DELETE_POST, */
  VOTE_POST,
  /* SORT_POST, */
} from '../actions/Constants'

export const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_BY_CATEGORY:
      return [ ...action.posts ]

    case FETCH_POSTS:
      return [ ...action.posts ]
      // return [
      //   ...state,
      //   ...action.posts
      // ]

    // case FETCH_POST_BY_ID:
    //   return {
    //     ...action.post
    //   }

    // case ADD_POST:
    //   return state.concat([post])

    // case EDIT_POST:
    //   return state.map(post => {
    //     if (post.id === postId) {
    //       post = updatedPost
    //     }
    //     return post
    //   })

    case VOTE_POST:
      return state.map(post => (action.post.id === post.id ? action.post : post))

    // case DELETE_POST:
    //   return state.filter(post => post.id !== postId)

    default:
      return state
  }
}

export const post = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_BY_ID:
      return {
        ...action.post
      }

    default:
      return state
  }
}
