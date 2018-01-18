import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import * as actions from '../../actions/postActions';

import Grid from 'material-ui/Grid';

import Post from './Post'
// import SinglePost from '../post/SinglePost'
import * as actions from '../../actions/postActions';

class Home extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  state = {
    posts: []
  }

  // componentDidMount() {
  //   ReadbleAPI.getPosts().then((posts) => {
  //     this.setState({ posts })
  //   })
  // }

  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
    console.log(posts)

    return (
      <Grid item xs={12}>
        <Grid container spacing={24}>
          {posts.map(post => (
            <Grid key={post.id} item xs={4}>
              {/* <Post
                post={post}
              /> */}
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

export default compose(
  withStyles(styles, {
    name: 'AppFrame',
  }),
  withWidth(),
  connect(),
)(AppFrame);

export default compose(
  withStyles(styles, {
    name: 'AppFrame',
  }),
  connect(state => ({
    uiTheme: state.theme,
  })),
)(AppFrame);
