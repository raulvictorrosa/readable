import { FETCH_CATEGORIES } from '../actions/actionTypes'

function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.res.categories

    default:
      return state
  }
}

export default categories
