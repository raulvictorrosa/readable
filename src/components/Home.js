import React, { Component } from 'react';
// import { connect } from 'react-redux'

import Grid from 'material-ui/Grid';

import Post from './Post'

import * as ReadbleAPI from '../utils/ReadbleAPI'

class Home extends Component {
  state = {
    posts: []
  }

  // componentDidMount() {
  //   ReadbleAPI.getPosts().then((posts) => {
  //     this.setState({ posts })
  //   })
  // }

  componentWillMount() {
    this.props.fetchData('BY_SCORE_HIGHEST')
  }

  render() {
    const { posts } = this.state
    console.log(posts)

    return (
      <Grid item xs={12}>
        <Grid container spacing={24}>
          {posts.map(post => (
            <Grid key={post.id} item xs={4}>
              <Post
                post={post}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsById,
  sortBy: state.setSorting ? state.setSorting.sort : ''
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchData: sortCriteria =>
    dispatch(fetchPosts()).then(() => dispatch(setSorting(sortCriteria)))
})

// export default withStyles(styles, { withTheme: true })(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home)
