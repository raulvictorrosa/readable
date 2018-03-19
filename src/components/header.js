import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;

    const currentPathName = window.location.pathname
    const pages = [
      {
        slug: `/`,
        heading: `Posts`
      },
      {
        slug: `/post-new`,
        heading: `Add new post`
      },
    ]
    const currentPageName = pages.filter((page) => page.slug === currentPathName)

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              // color="contrast"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
              {currentPageName[0].heading}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

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
})

export default withStyles(styles)(Header)
