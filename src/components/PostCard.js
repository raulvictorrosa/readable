import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment'
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import blueGrey from 'material-ui/colors/blueGrey';
import PostOptions from './PostOptions'
import PostCardActions from './PostCardActions'

class PostCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  }


  render() {
    const { classes, post } = this.props;
    const { id, author, body, commentCount, timestamp, title, voteScore } = post;
    return (
      <div>
        <Card className={classes.card}>
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

          <PostCardActions
            id={id}
            commentCount={commentCount}
            voteScore={voteScore}
          />
        </Card>
      </div>
    )
  }
}

const styles = theme => ({
  media: {
    height: 194,
  },
  avatar: {
    backgroundColor: blueGrey[500],
    width: 85,
    height: 85
  }
})

// const mapStateToProps = post => ({
//   post
// })

// const mapDispatchToProps = dispatch => ({
//   fetchPostById: id => dispatch(getPostById(id))
// })

// export default compose(
//   withStyles(styles),
//   connect(
//     // mapStateToProps,
//     null,
//     mapDispatchToProps
//   )
// )(PostCard)
export default withStyles(styles)(PostCard)
