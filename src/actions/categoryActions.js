import * as API from '../utils/ReadbleAPI'
import { FETCH_CATEGORIES } from './actionTypes.js';

export const fetchCategories = () => {
  return (dispatch) => {
    API.fetchCategories().then(res => {
      dispatch({ type: FETCH_CATEGORIES, res })
    })
  }
}
