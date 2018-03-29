import React, { Component } from 'react';
// import { PropTypes } from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
// import PostDetail from './post-detail';
// import { getSortedPostsWithSortedComments } from 'selectors';

class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path='/posts/new' component={PostForm} />
          <Route path='/posts/:id/edit' component={PostForm} />

          {/* <Route exact path='/' render={() => ( <PostList posts={posts} /> )} /> */}
          {/* <Route exact path='/posts/new' component={PostForm} /> */}
          {/* <Route path='/posts/:id/edit' render={({ match }) => (<PostForm initialValues={this.filterPostById(posts, match.params.id)} />)} /> */}
          {/* <Route exact path='/posts/:id' render={({ match }) => (<PostDetail {...this.filterPostById(posts, match.params.id) } />)} /> */}
          {/* <Route exact path='/categories/:name' render={({ match }) => (<PostList posts={this.filterPostByCategory(posts, match.params.name)} />)} /> */}
        {/* </Switch> */}

        {/* <Route exact path='/:category' component={Category} />
        <Route path='/:category/:post_id' component={PostDetail} /> */}
        </Switch>

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
      </div>
    )
  }
}

export default Content
