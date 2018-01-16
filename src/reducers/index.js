import { combineReducers } from 'redux'

import {
  ADD_POST,
  DELETE_POST
} from '../actions'

function food(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe
      }

    default:
      return state
  }
}

const initialPostState = {
  id: null,
  title: null,
  body: null,
  category: null
}

function posts(state = initialPostState, action) {
  const { id, title, body, category } = action

  switch (action.type) {
    case ADD_POST:
      const { post } = action
      return {
        ...state,
        [id]: post
        }
      }
    case DELETE_POST :
      const { post } = action
      return {
        ...state,
        [id]: post
      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
})
