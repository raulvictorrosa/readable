import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { getPostById } from '../actions/Posts';
import PostCardActions from './PostCardActions';
import PostOptions from './PostOptions';

class PostDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params
    this.props.fetchPostById(id)
  }

  render() {
    const { match, post } = this.props
    const { id } = match.params
    const { body, commentCount, timestamp, title, voteScore } = post
    return (
      <Grid container spacing={24}>
        <Grid key={post.id} item xs={12}>
          <Card>
            <CardHeader
              action={<PostOptions postId={id} />}
              subheader={Moment(timestamp).format('MMMM DD, YYYY')}
            />

            <CardContent>
              <Typography variant="headline" color="secondary">
                {title}
              </Typography>
              <Typography paragraph={true}>
                {body}
              </Typography>
            </CardContent>

            <PostCardActions post={{ ...post }} />
          </Card>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post
})

const mapDispatchToProps = dispatch => ({
  fetchPostById: id => dispatch(getPostById(id))
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostDetail)
