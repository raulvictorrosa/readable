import { FETCH_CATEGORIES } from './Constants'
import { fetchCategories } from '../api/Categories'

export const getCategories = () => dispatch =>
  fetchCategories().then(categories => dispatch({
    type: FETCH_CATEGORIES,
    categories
  }))

