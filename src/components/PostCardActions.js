import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import { votePostCount } from '../actions/Posts';
import { Link, withRouter } from 'react-router-dom'
import Moment from 'moment'
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import blueGrey from 'material-ui/colors/blueGrey';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import InsertCommentIcon from 'material-ui-icons/InsertComment';
import ModeCommentIcon from 'material-ui-icons/ModeComment';
import ForwardIcon from 'material-ui-icons/Forward';
// import CommentList from './CommentList';

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

  handleInsertComment = () => {
    if (this.props.match.path === '/posts/:id') {
      this.setState({ expanded: !this.state.expanded })

      const { post/* , insertComment */ } = this.props
      const { id/* , insertComment */ } = post
      console.log(`Insert comment on post ${id}`)
    }
  }

  render() {
    const { classes, post, match } = this.props
    const { id, author, commentCount, timestamp, title, voteScore } = post
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
            onClick={this.handleInsertComment}
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
          {/* <Comments id={id}/> */}
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
