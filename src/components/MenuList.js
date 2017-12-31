import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';

import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class MenuList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = { open: false }

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

          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Categorias" />
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
