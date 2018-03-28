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

class PostCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    postInfo: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props;

    const { postInfo } = this.props;
    const { timestamp } = postInfo

    // console.log(Moment().unix())
    // addPost('asdasdasd', Date(), title, body, author, category)

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                aria-label={postInfo.author}
                alt={postInfo.author}
                sizes="200"
                className={classes.avatar}
              >
                {postInfo.author}
              </Avatar>
            }
            action={<PostOptions />}
            title={postInfo.title}
            subheader={Moment(timestamp).format('MMMM DD, YYYY')}
          />

          <CardContent>
            <Typography component="p">
              {postInfo.body}
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
              <b>{postInfo.voteScore}</b>
            </Typography>

            <IconButton aria-label="Mode Comments">
              <ModeCommentIcon />
            </IconButton>
            <Typography color="secondary" type="body2">
              <b>{postInfo.commentCount}</b>
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

export default withStyles(styles)(PostCard);
