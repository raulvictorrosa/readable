import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import Moment from 'moment'
import { v4 } from 'uuid';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import PostOptions from './PostOptions'

class PostForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    id: '',
    author: this.props.post ? this.props.post.author : '',
    body: this.props.post ? this.props.post.body : '',
    title: this.props.post ? this.props.post.title : '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props;
    const { id, author, body, title } = this.state
    console.log(this.props)
    const { handleSubmit } = this.props
    return (
      <Grid item xs={12}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    id="title"
                    label="Title"
                    className={classes.textField}
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                    fullWidth
                    required
                    autoFocus
                  />
                  <TextField
                    id="body"
                    label="Body"
                    className={classes.textField}
                    value={this.state.body}
                    onChange={this.handleChange('body')}
                    margin="normal"
                    fullWidth
                    required
                    multiline
                    rows={5}
                  />
                  <TextField
                    id="author"
                    label="Author"
                    className={classes.textField}
                    value={this.state.author}
                    onChange={this.handleChange('author')}
                    margin="normal"
                    fullWidth
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
})

// const mapStateToProps = (posts) => ({
//   ...posts
// })

export default compose(
  withStyles(styles),
  connect()
)(PostForm)
