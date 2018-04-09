import Avatar from 'material-ui/Avatar';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import blueGrey from 'material-ui/colors/blueGrey';
import { withStyles } from 'material-ui/styles';
import Moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import compose from 'recompose/compose';
import { getComments } from '../actions/Comments';
import CommentOptions from './CommentOptions';

class CommentList extends Component {
  componentDidMount() {
    const { id } = this.props
    this.props.fetchComments(id)
  }

  render() {
    const { classes, comments } = this.props
    return (
      <div>
        <Card>
          {comments.map(comment => (
            <div key={comment.id}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label={comment.author}
                    alt={comment.author}
                    className={classes.avatar}
                  >
                    {comment.author ? comment.author.substr(0, 2) : ''}
                  </Avatar>
                }
                action={<CommentOptions id={comment.id} />}
                title={comment.title}
                subheader={Moment(comment.timestamp).format('MMMM DD, YYYY')}
              />

              <CardContent>
                <Typography paragraph>
                  {comment.body}
                </Typography>
              </CardContent>
            </div>
          ))}
        </Card>
      </div>
    )
  }
}

const styles = theme => ({
  avatar: {
    backgroundColor: blueGrey[500],
  }
})

const mapStateToProps = state => ({
  comments: state.comments
})

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(getComments(id))
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CommentList)
