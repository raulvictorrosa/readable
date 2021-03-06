import ForwardIcon from 'material-ui-icons/Forward';
import InsertCommentIcon from 'material-ui-icons/InsertComment';
import ModeCommentIcon from 'material-ui-icons/ModeComment';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { votePostCount } from '../actions/Posts';
import CommentList from './CommentList';

class PostCardActions extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    voteUp: PropTypes.func.isRequired,
    voteDown: PropTypes.func.isRequired
  }

  state = {
    expanded: false
  }

  handleLike = () => {
    const { post, voteUp } = this.props
    const { id } = post
    voteUp(id)
  }

  handleDislike = () => {
    const { post, voteDown } = this.props
    const { id } = post
    voteDown(id)
  }

  handleShowComment = () => {
    if (this.props.match.path === '/posts/:id') {
      this.setState({ expanded: !this.state.expanded })

      const { post/* , insertComment */ } = this.props
      const { id/* , insertComment */ } = post
      console.log(`Insert comment on post ${id}`)
    }
  }

  render() {
    const { classes, post, match } = this.props
    const { id, commentCount, voteScore } = post
    const { expanded } = this.state
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
            aria-expanded={this.state.expanded}
            onClick={this.handleShowComment}
          >
            {expanded
              ? <ModeCommentIcon />
              : <InsertCommentIcon />
            }
          </IconButton>

          <Typography color="secondary" type="body2">
            {commentCount}
          </Typography>

          <div className={classes.flexGrow} />
          {match.path !== '/posts/:id' &&
            <Link to={`/posts/${id}`}>
              <IconButton
                aria-label="Show more"
                >
                <ForwardIcon />
              </IconButton>
            </Link>
          }
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CommentList id={id} />
        </Collapse>
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
