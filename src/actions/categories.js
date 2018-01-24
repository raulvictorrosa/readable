import API from '../api'
import { FETCH_CATEGORIES } from '../actions'

export const fetchCategories = () => (dispatch) =>
  API.fetchCategories()
    .then(categories => dispatch({ type: FETCH_CATEGORIES, categories }));

