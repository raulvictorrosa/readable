import { FETCH_CATEGORIES } from '../actions/Constants'

function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [
        ...state,
        ...action.categories
      ]

    default:
      return state
  }
}

export default categories
