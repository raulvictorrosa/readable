import { fetchCategories } from '../api/Categories';
import { FETCH_CATEGORIES } from './Constants';

export const getCategories = () => dispatch =>
  fetchCategories().then(categories => dispatch({
    type: FETCH_CATEGORIES,
    categories
  }))

