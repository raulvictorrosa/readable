import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Sidebar from './Sidebar';
import Post from './Post'

import * as ReadbleAPI from '../utils/ReadbleAPI'

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: 430,
    zIndex: 1,
    overflow: 'hidden',
    flexGrow: 1,
  },

  // Grid
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },

  // content
  appFrame: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    // height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      // height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class Home extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    posts: []
  }

  componentDidMount() {
    ReadbleAPI.getPosts().then((posts) => {
      this.setState({ posts })
    })
  }


  render() {
    const { classes } = this.props;

    const { posts } = this.state

    console.log(posts)

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Sidebar />

          <main className={classes.content}>
            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Grid container className={classes.demo} spacing={Number(24)}>
                  {posts.map(post => (
                    <Grid key={post.id} item>
                      <Post
                        post={post}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
