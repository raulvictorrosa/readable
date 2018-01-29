import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

// import { fetchPosts } from '../actions/posts'
// import { fetchCategories } from '../actions/categories'
import { getAllCategories } from '../actions/categories';
import { getAllPostsAndComments } from '../actions/posts';

import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
// import Footer from './footer';

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: 430,
    zIndex: 1,
    overflow: 'hidden',
    flexGrow: 1,
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
})

class Index extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPostsAndComments();

    // this.props.fetchPosts()
    // this.props.fetchCategories()
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header/>
          <Sidebar/>

          <main className={classes.content}>
            <Grid container className={classes.root}>
              <Content/>
            </Grid>
          </main>
          {/* <Footer/> */}
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withRouter,
  connect(undefined, {
    fetchCategories: getAllCategories,
    fetchPostsAndComments: getAllPostsAndComments
  }),
  // connect(undefined, {
  //   fetchPosts,
  //   fetchCategories
  // }),
)(Index);
