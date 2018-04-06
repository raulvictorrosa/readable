import Grid from 'material-ui/Grid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { getPosts } from '../actions/Posts';
import PostCard from './PostCard';


class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <Grid container spacing={24}>
        {posts.map(post => (
          <Grid key={post.id} item xs={12}>
            <PostCard post={{ ...post }} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

const mapStateToProps = posts => ({
  ...posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(getPosts())
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostList)
