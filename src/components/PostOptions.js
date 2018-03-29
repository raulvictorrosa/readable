import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import { withStyles } from 'material-ui/styles';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { MenuItem, MenuList } from 'material-ui/Menu';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

class PostOptions extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleDelete = () => {
    console.log('Delete post')
  }

  render() {
    const { classes, postId } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Manager>
          <ClickAwayListener onClickAway={this.handleClose}>
            <Target>
              <IconButton
                aria-label="More"
                aria-owns={this.state.open ? 'menu-list' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={open}
              className={classNames({ [classes.popperClose]: !open })}
            >
              <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem component={Link} to={`/posts/${postId}/edit`}>Edit</MenuItem>
                    <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </Popper>
          </ClickAwayListener>
        </Manager>
      </div>
    );
  }
}

const styles = theme => ({
  popperClose: {
    pointerEvents: 'none',
  },
})

export default withStyles(styles)(PostOptions);
