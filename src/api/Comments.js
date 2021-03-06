import { v4 } from 'uuid';
import { BASE_URL, headers } from './Constants';

/**
* @description Get all the comments for a single post
* @param {string} id - The id of the post
* @returns {Promise} Promise array that contains the comments of the post
*/
export const fetchComments = (id) =>
  fetch(`${BASE_URL}/posts/${id}/comments`, { headers })
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
// export const addComment = (id, timestamp, body, author, parentId) =>
export const addComment = (parentId, data) =>
  fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ id, timestamp, body, author, parentId })
    body: JSON.stringify({
      ...data,
      parentId,
      id: v4(),
      timestamp: Date.now()
    })
  }).then(res => res.json())

/**
* @description Get the details for a single comment
* @param {string} id - The id of the comment
* @returns {Promise} Promise object represents the comment
*/
export const fetchComment = (id) =>
  fetch(`${BASE_URL}/comments/${id}`, { headers })
    .then(res => res.json())

/**
* @description Used for voting on a comment.
* @param {string} id - The id of the post
* @param {string} option - Either "upVote" or "downVote"
* @returns {Promise} Promise object represents the comment with the new vote
*/
export const voteComment = (id, option) =>
  fetch(`${BASE_URL}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

// const voteComment = (option) => (commentId) => {
//   return fetch(`${BASE_URL}/comments/${commentId}`,
//     {
//       method: 'POST',
//       headers: {
//         ...headers,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ option })
//     })
//     .then(res => res.json());
// }
// export const upvoteComment = voteComment(OPTION_UPVOTE);
// export const downvoteComment = voteComment(OPTION_DOWNVOTE);

/**
* @description Edit the details of an existing comment
* @param {string} id - The id of the post
* @param {number} timestamp - timestamp. Get this however you want.
* @param {string} body - The body of the comment
* @returns {Promise} Promise object represents the comment updated
*/
// export const editComment = (id, timestamp, body) =>
export const editComment = (id, data) =>
  fetch(`${BASE_URL}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ timestamp, body })
    body: JSON.stringify({
      ...data,
      timestamp: Date.now()
    })
  }).then(res => res.json())

/**
* @description Sets a comment's deleted flag to 'true'
* @param {string} id - The id of the comment
* @returns {Promise} Promise object represents the comment's deleted
*/
export const deleteComment = (id) =>
  fetch(`${BASE_URL}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
