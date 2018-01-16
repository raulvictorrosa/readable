
const api = "http://localhost:3001"


// Generate a unique token for storing your readble data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Get all of the categories available for the app.List is found in categories.js.
// Feel free to extend this list as you desire.
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json()) // Returning an Object
    .then(data => data.categories) // Returning an Array

// Get all of the posts for a particular category
export const getPostsByCategories = (path) =>
  fetch(`${api}/${path}/posts`, { headers })
    .then(res => res.json())

// Get all of the posts. Useful for the main page when no category is selected.
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

// Add a new post
export const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body, author, category })
  }).then(res => res.json())

// Get the details of a single post
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


// GET /posts/:id/comments
//   USAGE:
//     Get all the comments for a single post

// POST /comments
//   USAGE:
//     Add a comment to a post

//   PARAMS:
//     id: Any unique ID. As with posts, UUID is probably the best here.
//     timestamp: timestamp. Get this however you want.
//     body: String
//     author: String
//     parentId: Should match a post id in the database.

// GET /comments/:id
//   USAGE:
//     Get the details for a single comment

// POST /comments/:id
//   USAGE:
//     Used for voting on a comment.
//   PARAMS:
//     option - String: Either "upVote" or "downVote"

// PUT /comments/:id
//   USAGE:
//     Edit the details of an existing comment

//   PARAMS:
//     timestamp: timestamp. Get this however you want.
//     body: String

// DELETE /comments/:id
//   USAGE:
//     Sets a comment's deleted flag to 'true'
