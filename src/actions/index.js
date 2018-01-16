export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export function addPost({ id, title, body, category }) {
  return {
    type: ADD_POST,
    id,
    title,
    body,
    category
  }
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}
