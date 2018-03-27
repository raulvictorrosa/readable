import { FETCH_CATEGORIES } from '../actions/Constants'

export const getCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  categories
})

