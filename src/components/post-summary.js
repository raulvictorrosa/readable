import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { upvotePost, downvotePost } from '../actions/posts';
import Stats from './stats';
import { CONTENT_POSTS } from '../actions/constants';
import ContentControl from './content-control';
import { formatDate } from '../utils/helper';

const PostSummary = ({ id, title, author, timestamp, comments = [], voteScore, onUpvotePost, onDownvotePost }) => (
  <div className='content-container-post'>
    <Stats
      onUpvote={() => onUpvotePost(id)}
      onDownvote={() => onDownvotePost(id)}
      voteScore={voteScore}
    />
    <div className='post-summary'>
      <Link to={`/posts/${id}`}>
        <h2 className='heading'>{title}</h2>
      </Link>
      <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
      <ContentControl type={CONTENT_POSTS} id={id} commentsCount={comments.length} />
    </div>
  </div>
)

export default connect(
  undefined,
  { onUpvotePost: upvotePost, onDownvotePost: downvotePost }
)(PostSummary);
