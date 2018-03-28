import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Index = (props) => {
  Index.propTypes = {
    classes: PropTypes.object.isRequired,
  }

  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header />
        <Sidebar />

        <main className={classes.content}>
          <Grid container className={classes.root}>
            <Content />
          </Grid>
        </main>
      </div>
    </div>
  )
}

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

export default withStyles(styles)(Index);
