
const api = "http://localhost:3001"


// Generate a unique token for storing your readble data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
* @description Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
* @param {string} category - The category of the posts
* @returns {Promise} Promise array of objects that contains the posts related to the category
*/
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

/**
* @description Get all of the posts for a particular category
* @param {string} category - The category of the posts
* @returns {Promise} Promise array of objects that contains the posts related to the category
*/
export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

/**
* @description Get all of the posts. Useful for the main page when no category is selected.
* @returns {Promise} Promise array of objects that contains the posts
*/
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

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
export const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body, author, category })
  }).then(res => res.json())

/**
* @description Get the details of a single post
* @param {string} id - The id of the post
* @returns {Promise} Promise object that contains the post
*/
export const getPostById = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

/**
* @description Used for voting on a post
* @param {string} id - The id of the post
* @param {string} option - Either "upVote" or "downVote"
* @returns {Promise} Promise object represents the post updated with the vote
*/
export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
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
export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json())

/**
* @description Sets the deleted flag for a post to 'true'. Sets the parentDeleted flag for all child comments to 'true'.
* @param {string} id - The id of the post
* @returns {Promise} Promise object represents the deleted post
*/
export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())


/**
* @description Get all the comments for a single post
* @param {string} id - The id of the post
* @returns {Promise} Promise array that contains the comments of the post
*/
export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())

/**
* @description Add a comment to a post
* @param {string} id - Any unique ID. As with posts, UUID is probably the best here.
* @param {number} timestamp - timestamp. Get this however you want.
* @param {string} body - The body of the comment
* @param {string} author - The name of the author
* @param {string} parentId - Should match a post id in the database.
* @returns {Promise} Promise object represents the comment added
*/
export const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, body, author, parentId })
  }).then(res => res.json())

/**
* @description Get the details for a single comment
* @param {string} id - The id of the comment
* @returns {Promise} Promise object represents the comment
*/
export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())

/**
* @description Used for voting on a comment.
* @param {string} id - The id of the post
* @param {string} option - Either "upVote" or "downVote"
* @returns {Promise} Promise object represents the comment with the new vote
*/
export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

/**
* @description Edit the details of an existing comment
* @param {string} id - The id of the post
* @param {number} timestamp - timestamp. Get this however you want.
* @param {string} body - The body of the comment
* @returns {Promise} Promise object represents the comment updated
*/
export const editComment = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  }).then(res => res.json())

/**
* @description Sets a comment's deleted flag to 'true'
* @param {string} id - The id of the comment
* @returns {Promise} Promise object represents the comment's deleted
*/
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
