import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import AddCircle from 'material-ui-icons/AddCircle';
import Categories from './categories';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  menuLinkItem: {
    textDecoration: 'none'
  }
});

class MenuList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props

    return (
      <div>
        <List>
          <ListItem>
            <Typography color="accent" type="title" noWrap>React Readble</Typography>
          </ListItem>
        </List>
        <Divider />

        <List className={classes.root}>
          <ListItem button component={Link} to='/'>
            <ListItemText primary="Posts" />
          </ListItem>
          <Collapse component="li" in>
            <List disablePadding>
              <ListItem button className={classes.nested} component={Link} to='/post-new'>
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
}

export default withStyles(styles)(MenuList);
