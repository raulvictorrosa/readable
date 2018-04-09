import { combineReducers } from 'redux'
// import { reducer as form } from 'redux-form';

import { posts, post } from './Posts'
import categories from './Categories'
import comments from './Comments'

export default combineReducers({
  posts,
  post,
  categories,
  comments
})
