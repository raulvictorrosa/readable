import { v4 } from 'uuid';
import { BASE_URL, headers/* , OPTION_UPVOTE, OPTION_DOWNVOTE */ } from './Constants';

/**
* @description Get all of the posts for a particular category
* @param {string} category - The category of the posts
* @returns {Promise} Promise array of objects that contains the posts related to the category
*/
export const fetchPostsByCategory = (category) =>
  fetch(`${BASE_URL}/${category}/posts`, { headers })
    .then(res => res.json())

/**
* @description Get all of the posts. Useful for the main page when no category is selected.
* @returns {Promise} Promise array of objects that contains the posts
*/
export const fetchPosts = () =>
  fetch(`${BASE_URL}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.filter(item => !item.deleted))

/**
* @description Add a new post
* @param {string} id - UUID should be fine, but any unique id will work
* @param {number} timestamp - timestamp in whatever format you like, you can use Date.now() if you like
* @param {string} title - The title of the post
* @param {string} body - The body of the post
* @param {string} author - The name of the post
* @param {string} category - Any of the categories listed in categories.js. Feel free to extend this list as you desire.
* @returns {Promise} Promise object represents the comment added
*/
// export const addPost = (id, timestamp, title, body, author, category) =>
export const addPost = (data) =>
  fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ id, timestamp, title, body, author, category })
    body: JSON.stringify({
      ...data,
      id: v4(),
      timestamp: Date.now()
    })
  }).then(res => res.json())

/**
* @description Get the details of a single post
* @param {string} id - The id of the post
* @returns {Promise} Promise object that contains the post
*/
export const fetchPostById = (id) =>
  fetch(`${BASE_URL}/posts/${id}`, { headers })
    .then(res => res.json())

/**
* @description Used for voting on a post
* @param {string} id - The id of the post
* @param {string} option - Either "upVote" or "downVote"
* @returns {Promise} Promise object represents the post updated with the vote
*/
export const votePost = (id, option) =>
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

/**
* @description Edit the details of an existing post
* @param {string} id - The id of the post
* @param {string} title - The title of the post
* @param {string} body - The body of the post
* @returns {Promise} Promise object represents the post updated
*/
// export const editPost = (id, title, body) =>
export const editPost = (id, data) =>
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ title, body })
    body: JSON.stringify({
      ...data
    })
  }).then(res => res.json())

/**
* @description Sets the deleted flag for a post to 'true'. Sets the parentDeleted flag for all child comments to 'true'.
* @param {string} id - The id of the post
* @returns {Promise} Promise object represents the deleted post
*/
export const deletePost = (id) =>
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
