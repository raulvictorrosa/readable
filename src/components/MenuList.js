import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';

import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import AddCircle from 'material-ui-icons/AddCircle';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class MenuList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = { open: true }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

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
          <ListItem button>
            <ListItemText primary="Posts" />
          </ListItem>
          <Collapse component="li" in>
            <List disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary="Add new" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Categories" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="All" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="React" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Redux" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(MenuList);