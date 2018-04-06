import React from 'react';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import AddCircle from 'material-ui-icons/AddCircle';
import Categories from './Categories';
import logo from '../images/logo.svg';

const MenuList = (props) => {
  MenuList.propTypes = {
    classes: PropTypes.object.isRequired,
  }

  const { classes } = props

  return (
    <div>
      <List>
        <ListItem className={classes.logo}>
          <img src={ logo }
            alt="React"
            className="logo shadow"
            height="42" width="42"
          />
          <Typography color="secondary" variant="title" noWrap>
            React Readble
          </Typography>
        </ListItem>
      </List>
      <Divider />

      <List className={classes.root}>
        <ListItem button component={Link} to='/'>
          <ListItemText primary="Posts" />
        </ListItem>
        <Collapse component="li" in>
          <List disablePadding>
            <ListItem button className={classes.nested} component={Link} to='/posts/new'>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText primary="Add new" />
            </ListItem>
          </List>
        </Collapse>

        <Categories />
      </List>
    </div>
  )
}

const styles = theme => ({
  logo: {
    paddingTop: '3px',
    paddingBottom: '3px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  menuLinkItem: {
    textDecoration: 'none'
  }
});

export default withStyles(styles)(MenuList);
