import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment'

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import blueGrey from 'material-ui/colors/blueGrey';

import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import ForwardIcon from 'material-ui-icons/Forward';

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
});

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
                // aria-label={post.author}
                alt={post.author}
                sizes="200"
                className={classes.avatar}
              >
                {post.author}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title.substr(1, 8 )}
            subheader={Moment(date).format('MMMM DD, YYYY')}
          />

          <CardContent>
            <Typography component="p">
              {post.body}
            </Typography>
          </CardContent>

          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Typography color="secondary" type="caption">
              <b>25</b>
            </Typography>

            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
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
