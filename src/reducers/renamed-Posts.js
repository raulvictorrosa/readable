// Reducer is pure function
// Return one and the same result if the same arguments are passed in
// Depend solely on the arguments passed into them
// Do not produce side effects
// import sortBy from 'sort-by'
import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  // VOTE_POST,
  // SORT_POST,
} from '../actions/Constants'

const posts = (state = [], action) => {
  switch (action.type) {
    // case FETCH_POSTS_BY_CATEGORY:
    //   return posts.filter(post => !(post.deleted))

    case FETCH_POSTS:
      return [
        ...state,
        ...action.posts
      ]

    // case ADD_POST:
    //   return state.concat([post])

    // case EDIT_POST:
    //   return state.map(post => {
    //     if (post.id === postId) {
    //       post = updatedPost
    //     }
    //     return post
    //   })

    // case DELETE_POST:
    //   return state.filter(post => post.id !== postId)

    default:
      return state
  }
}

export default posts
