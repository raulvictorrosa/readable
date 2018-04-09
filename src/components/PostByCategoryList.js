import Grid from 'material-ui/Grid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { getPostsByCategory } from '../actions/Posts';
import PostCard from './PostCard';


class PostByCategoryList extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.fetchPostsByCategory(category);
  }

  componentWillReceiveProps(nextProps) {
    const { category } = this.props.match.params;
    const nextCategory = nextProps.match.params.category;
    if (category !== nextCategory)
      this.props.fetchPostsByCategory(nextCategory);
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
  fetchPostsByCategory: category => dispatch(getPostsByCategory(category)),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostByCategoryList)
