import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom';
import { getPosts } from '../actions/Posts'
import { fetchPosts } from '../api/Posts'
import Grid from 'material-ui/Grid';

import PostCard from './PostCard'

class PostList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    fetchPosts().then((posts) => dispatch(getPosts(posts)))
  }

  render() {
    const { posts } = this.props

    return (
      <Grid item xs={12}>
        <Grid container spacing={24}>
          {posts.map(post => (
            <Grid key={post.id} item xs={4}>
              <PostCard postInfo={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (posts) => ({
  ...posts
})

export default compose(
  // withRouter,
  connect(mapStateToProps),
)(PostList)
