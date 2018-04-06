import MenuIcon from 'material-ui-icons/Menu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { PropTypes } from 'prop-types';
import React from 'react';

const Header = (props) => {
  Header.propTypes = {
    classes: PropTypes.object.isRequired,
  }

  const { classes } = props;

  // const currentPathName = window.location.pathname
  // const pages = [
  //   {
  //     slug: `/`,
  //     heading: `Posts`
  //   },
  //   {
  //     slug: `/post-new`,
  //     heading: `Add new post`
  //   },
  // ]
  // const currentPageName = pages.filter((page) => page.slug === currentPathName)

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
          {{/* <Typography color="inherit" variant="title" noWrap>
            {currentPageName[0].heading}
          </Typography> */}}
        </Toolbar>
      </AppBar>
    </div>
  )
}

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
})

export default withStyles(styles)(Header)
