import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment'

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import blueGrey from 'material-ui/colors/blueGrey';
import List, { ListItem, ListItemIcon } from 'material-ui/List';

import KeyboardArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import ModeCommentIcon from 'material-ui-icons/ModeComment';
import ForwardIcon from 'material-ui-icons/Forward';

import PostOptions from './PostOptions'

const styles = theme => ({
  card: {
    maxWidth: 356,
  },
  media: {
    height: 194,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  avatar: {
    backgroundColor: blueGrey[500],
    width: 85,
    height: 85
  },
  listScore: {
    flex: '0 0 auto'
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItemIcon: {
    marginRight: 0
  },
})

class Post extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props;

    const { post } = this.props;
    const { timestamp } = post
    const date = new Date(timestamp)

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                aria-label={post.author}
                alt={post.author}
                sizes="200"
                className={classes.avatar}
              >
                {post.author}
              </Avatar>
            }
            action={<PostOptions />}
            title={post.title}
            subheader={Moment(date).format('MMMM DD, YYYY')}
          />

          <CardContent>
            <Typography component="p">
              {post.body}
            </Typography>
          </CardContent>

          <CardActions disableActionSpacing>
            <List className={classes.listScore} disablePadding>
              <ListItem button className={classes.listItem}>
                <ListItemIcon aria-label="Up score" >
                  <KeyboardArrowUpIcon className={classes.listItemIcon} titleAccess="Up score" />
                </ListItemIcon>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <ListItemIcon aria-label="Down score">
                  <KeyboardArrowDownIcon className={classes.listItemIcon} titleAccess="Down score" />
                </ListItemIcon>
              </ListItem>
            </List>
            <Typography color="secondary" type="body2">
              <b>{post.voteScore}</b>
            </Typography>

            <IconButton aria-label="Mode Comments">
              <ModeCommentIcon />
            </IconButton>
            <Typography color="secondary" type="body2">
              <b>{post.commentCount}</b>
            </Typography>

            <div className={classes.flexGrow} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-label="Show more"
            >
              <ForwardIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
