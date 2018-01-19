import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Route } from 'react-router-dom';
import { Link, Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { sortPost } from '../actions/postActions'
// import { fetchCategories } from '../actions/categoryActions'
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Sidebar from './Sidebar';
import Home from './Home'
import PostNew from './PostNew'

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
    posts: PropTypes.array,
    categories: PropTypes.array
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Sidebar />

          <main className={classes.content}>
            <Grid container className={classes.root}>
              <Route exact path='/' component={Home} />
              <Route exact path='/post-new' component={PostNew} />
              {/* <Route exact path='/:category' component={Category} />
              <Route path='/:category/:post_id' component={PostDetail} /> */}
            </Grid>
          </main>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

// export default withStyles(styles, { withTheme: true })(Index)
export default withRouter(
  connect(
    mapStateToProps, {
      sortPost,
      // fetchCategories
    }
  )(Index)
)
