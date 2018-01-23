import { BASE_URL, headers } from './constants';

/**
* @description Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
* @param {string} category - The category of the posts
* @returns {Promise} Promise array of objects that contains the posts related to the category
*/
export const fetchCategories = () =>
  fetch(`${BASE_URL}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
