import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { PropTypes } from 'prop-types';

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
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Sidebar />

          <main className={classes.content}>
            <Grid container className={classes.root}>
              <Route exact path='/' render={() => (
                <Home />
              )} />
              <Route path='/post-new' component={PostNew} />
              {/* <Route exact path='/:category' component={Category} />
              <Route path='/:category/:post_id' component={PostDetail} /> */}
            </Grid>
          </main>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Index)
