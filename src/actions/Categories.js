import { FETCH_CATEGORIES } from './Constants'

export const getCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  categories
})

