export const BASE_URL = 'http://localhost:3001';

// Generate a unique token for storing your readble data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// magic keywords used for backend server request
export const OPTION_UPVOTE = 'upVote';
export const OPTION_DOWNVOTE = 'downVote';


