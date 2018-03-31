import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { votePostCount } from '../actions/Posts';
import { withRouter } from 'react-router-dom'
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import InsertCommentIcon from 'material-ui-icons/InsertComment';
// import ModeCommentIcon from 'material-ui-icons/ModeComment';
import ForwardIcon from 'material-ui-icons/Forward';

class PostCardActions extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    postInfo: PropTypes.object.isRequired
  }

  // componentDidMount() {
  //   const { dispatch, postInfo } = this.props
  //   const { id } = postInfo
  //   fetchPostById(id).then((posts) => dispatch(getPosts(posts)))
  // }

  handleLike = () => {
    const { voteUp, postInfo } = this.props;
    const { id } = postInfo
    voteUp(id)
  }

  handleDislike = () => {
    const { voteDown, postInfo } = this.props;
    const { id } = postInfo
    voteDown(id)
  }

  handleInsertComment = () => {
    const { /* dispatch,  */postInfo } = this.props;
    const { id } = postInfo
    // fetchPosts().then((posts) => dispatch(getPosts(posts)))
    console.log(`Insert comment on post ${id}`);
  }

  render() {
    const { classes, postInfo } = this.props;
    const { commentCount, voteScore } = postInfo;
    return (
      <div>
        <CardActions disableActionSpacing>
          <IconButton
            aria-label="Like it"
            onClick={this.handleLike}
          >
            <ThumbUpIcon />
          </IconButton>

          <IconButton
            aria-label="Dislike it"
            onClick={this.handleDislike}
          >
            <ThumbDownIcon />
          </IconButton>

          <Typography color="secondary" type="body2">
            {voteScore}
          </Typography>

          <IconButton
            aria-label="Insert Comment"
            onClick={this.handleInsertComment}
          >
            <InsertCommentIcon />
          </IconButton>

          <Typography color="secondary" type="body2">
            {commentCount}
          </Typography>

          <div className={classes.flexGrow} />

          <IconButton
            aria-label="Show more"
            onClick={this.handleExpandClick}
          >
            {/* <Link to="/search">Add a book</Link> */}
            <ForwardIcon />
          </IconButton>
        </CardActions>
      </div>
    )
  }
}

const styles = theme => ({
  flexGrow: {
    flex: '1 1 auto',
  }
})

// const mapStateToProps = (posts) => ({
//   ...posts
// })

const mapDispatchToProps = dispatch => ({
  voteUp: id => dispatch(votePostCount(id, 'upVote')),
  voteDown: id => dispatch(votePostCount(id, 'downVote')),
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(null, mapDispatchToProps),
)(PostCardActions)
