import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types'

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import MenuIcon from 'material-ui-icons/Menu';
import 'typeface-roboto'

import MenuList from './MenuList';
import Post from './Post'

const drawerWidth = 240;

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
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
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

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  }

  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  render() {
    const { classes } = this.props;
    const { theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Posts
              </Typography>
            </Toolbar>
          </AppBar>

          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <MenuList classes={classes.list} />
            </Drawer>
          </Hidden>

          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <MenuList classes={classes.list} />
              <Divider />
            </Drawer>
          </Hidden>

          <main className={classes.content}>
            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Grid container className={classes.demo} spacing={Number(24)}>
                  {[0, 1, 2, 3].map(value => (
                    <Grid key={value} item>
                      <Post />
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

export default withStyles(styles, { withTheme: true })(App);
