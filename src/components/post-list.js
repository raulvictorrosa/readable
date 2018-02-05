import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENT_POSTS } from '../actions/constants';
import Sorter from './sorter';
import PostSummary from './post-summary';

const conditionalRender = (WrappedComponent) => ({ posts, ...props }) => (
  posts.length === 0 ?
  <WrappedComponent>
    <p><em>Whoops! There are no posts to display!</em></p>
  </WrappedComponent>
  :
  <WrappedComponent {...props}>
    {posts.map(
      post => <PostSummary key={post.id} {...post} />
    )}
  </WrappedComponent>
)

const PostList = ({ children }) => (
  <div className='post-list'>
    <div className='post-submenu'>
      <Link to='/posts/new'>New Post</Link>
      <Sorter content={CONTENT_POSTS} />
    </div>
    {children}
  </div>
)

export default conditionalRender(PostList);
