import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import { votePostCount } from '../actions/Posts';
import { Link, withRouter } from 'react-router-dom'
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
    id: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    voteUp: PropTypes.func.isRequired,
    voteDown: PropTypes.func.isRequired,
  }

  handleLike = () => {
    const { id, voteUp } = this.props;
    voteUp(id)
  }

  handleDislike = () => {
    const { id, voteDown } = this.props;
    voteDown(id)
  }

  handleInsertComment = () => {
    const { id/* , insertComment */ } = this.props;
    console.log(`Insert comment on post ${id}`);
  }

  render() {
    const {
      classes,
      id,
      commentCount,
      voteScore
    } = this.props;
    console.log(this.props)
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

          <Link to={`/posts/${id}`}>
            <IconButton
              aria-label="Show more"
            >
              <ForwardIcon />
            </IconButton>
          </Link>
        </CardActions>
      </div>
    )
  }
}

const styles = theme => ({
  flexGrow: {
    flex: '1 1 auto'
  }
})

const mapDispatchToProps = dispatch => ({
  voteUp: id => dispatch(votePostCount(id, 'upVote')),
  voteDown: id => dispatch(votePostCount(id, 'downVote'))
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(PostCardActions)
