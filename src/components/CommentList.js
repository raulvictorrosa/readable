import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import { getComments } from '../actions/Posts';
import Moment from 'moment';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import blueGrey from 'material-ui/colors/blueGrey';

class CommentList extends Component {
  componentDidMount() {
    const { id } = this.props
    this.props.fetchComments(id)
  }

  render() {
    return (
      <Card>
        {/* <CardHeader
          avatar={
            <Avatar
              aria-label={author}
              alt={author}
              className={classes.avatar}
            >
              {author ? author.substr(0, 2) : ''}
            </Avatar>
          }
          // action={<CommentOptions postId={id} />}
          title={title}
          subheader={Moment(timestamp).format('MMMM DD, YYYY')}
        />

        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent> */}
      </Card>
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
