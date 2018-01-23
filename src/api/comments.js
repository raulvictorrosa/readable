import { v4 } from 'uuid';
import { BASE_URL, headers, OPTION_UPVOTE, OPTION_DOWNVOTE } from './constants';

/**
* @description Get all the comments for a single post
* @param {string} id - The id of the post
* @returns {Promise} Promise array that contains the comments of the post
*/
export const fetchComments = (id) =>
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
export const fetchComment = (id) =>
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
