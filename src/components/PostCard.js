import Avatar from 'material-ui/Avatar';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import blueGrey from 'material-ui/colors/blueGrey';
import { withStyles } from 'material-ui/styles';
import Moment from 'moment';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import PostCardActions from './PostCardActions';
import PostOptions from './PostOptions';

class PostCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  }

  render() {
    const { classes, post } = this.props;
    const { id, author, body, commentCount, timestamp, title, voteScore } = post;
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label={author}
              alt={author}
              sizes="200"
              className={classes.avatar}
            >
              {author}
            </Avatar>
          }
          action={<PostOptions postId={id} />}
          title={title}
          subheader={Moment(timestamp).format('MMMM DD, YYYY')}
        />

        <CardContent>
          <Typography component="p">
            {body}
          </Typography>
        </CardContent>

        <PostCardActions post={{ id, commentCount, voteScore }} />
      </Card>
    )
  }
}

const styles = theme => ({
  avatar: {
    backgroundColor: blueGrey[500],
    width: 85,
    height: 85
  }
})

export default withStyles(styles)(PostCard)
