import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import compose from 'recompose/compose';
import { withRouter, Switch, Route } from 'react-router-dom';
import { getPosts } from '../actions/Posts'
import { fetchPosts } from '../api/Posts'
// import PostList from './post-list';
// import PostForm from './post-form';
// import PostDetail from './post-detail';
// import { getSortedPostsWithSortedComments } from 'selectors';

class Content extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    fetchPosts()
      .then((posts) => dispatch(getPosts({ posts })))
  }

  render() {
    const { posts } = this.props;
    console.log(posts)
    return (
      <div>
        {/* <Switch> */}
          {/* <Route exact path='/' render={() => ( <PostList posts={posts} /> )} /> */}
          {/* <Route exact path="/" component={PostList} /> */}

          {/* <Route exact path='/posts/new' component={PostForm} /> */}
          {/* <Route path='/posts/:id/edit' render={({ match }) => (<PostForm initialValues={this.filterPostById(posts, match.params.id)} />)} />
          <Route exact path='/posts/:id' render={({ match }) => (<PostDetail {...this.filterPostById(posts, match.params.id) } />)} />
          <Route exact path='/categories/:name' render={({ match }) => (<PostList posts={this.filterPostByCategory(posts, match.params.name)} />)} /> */}
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
        {/* </Switch>  */}
      </div>
    )
  }
};

const mapStateToProps = (post) => ({ post })

export default connect(
  mapStateToProps
)(Content)
