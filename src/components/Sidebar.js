import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import MenuIcon from 'material-ui-icons/Menu';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import MenuList from './MenuList';

const drawerWidth = 240;

const styles = theme => ({
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
})

class Sidebar extends Component {
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
      <div>
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
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar)
