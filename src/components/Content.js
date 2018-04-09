import React from 'react';
// import { PropTypes } from 'prop-types'
import { Route, Switch } from 'react-router-dom';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import PostList from './PostList';
import PostByCategoryList from './PostByCategoryList';
// import { getSortedPostsWithSortedComments } from 'selectors';

const Content = () =>
  <Switch>
    <Route exact path="/" component={PostList} />
    <Route exact path="/:category" component={PostByCategoryList} />
    <Route exact path='/posts/new' component={PostForm} />
    <Route path='/posts/:id/edit' component={PostForm} />
    <Route exact path='/posts/:id' component={PostDetail} />
    {/* <Route exact path='/posts/:id' render={({ match }) => (<PostDetail {...this.filterPostById(posts, match.params.id) } />)} /> */}

    {/* <Route exact path='/' render={() => ( <PostList posts={posts} /> )} /> */}
    {/* <Route exact path='/posts/new' component={PostForm} /> */}
    {/* <Route path='/posts/:id/edit' render={({ match }) => (<PostForm initialValues={this.filterPostById(posts, match.params.id)} />)} /> */}
    {/* <Route exact path='/categories/:name' render={({ match }) => (<PostList posts={this.filterPostByCategory(posts, match.params.name)} />)} /> */}
  {/* </Switch> */}

  {/* <Route exact path='/:category' component={Category} />
  <Route path='/:category/:post_id' component={PostDetail} /> */}

  {/* <Switch>   */}
    {/* <Route exact path="/" component={Home} /> */}
    {/* <Route exact path="/post-new" component={PostNew} /> */}
    {/* <Route exact path="/:category" component={Category} /> */}
    {/* <Route exact path="/:category" component={Home} /> */}
    {/* <Route exact path="/:category/:postId" component={PostDetail} /> */}
    {/* <Route path="/:category/:postId/edit" component={EditPost} /> */}
    {/* <Route path="/:category/:postId/comment" component={NewComment} /> */}
    {/* <Route path="/:category/:postId/:commentId/edit" component={EditComment} /> */}
  {/* </Switch> */}
  </Switch>

export default Content
