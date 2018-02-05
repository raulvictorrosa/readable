import React, { Component } from 'react';

import { CONTENT_COMMENTS } from '../actions/constants';
import Sorter from './sorter';
import Comment from './comment';
import CommentForm from './comment-form';

class CommentList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayForm: false,
      commentToEdit: {}
    }
    this.showCommentForm = this.showCommentForm.bind(this);
    this.hideCommentForm = this.hideCommentForm.bind(this);
  }

  filterCommentById(comments, id) {
    return comments.filter(comment => comment.id === id);
  }

  showCommentForm(comment) {
    this.setState({ displayForm: true, commentToEdit: comment });
  }

  hideCommentForm() {
    this.setState({ displayForm: false, commentToEdit: {} });
  }

  render() {
    const { postId, comments } = this.props;
    const { displayForm, commentToEdit } = this.state;
    return (
      <div>
        <div className='post-comments'>
          <h3 className='heading'>Comments</h3>
        </div>
        <div className='post-submenu'>
          <a className='fake-link' onClick={(event) => {
            event.preventDefault();
            this.showCommentForm();
            }}>New Comment</a>
          <Sorter content={CONTENT_COMMENTS} />
        </div>
        {displayForm &&
        <CommentForm
          initialValues={commentToEdit}
          hideForm={this.hideCommentForm}
          id={commentToEdit && commentToEdit.id}
          postId={postId}
        />}
        {comments.length === 0 ?
          <p><em>Darn, looks like nobody cares about this post!</em></p>
          :
          comments.map(comment =>
            <Comment
              key={comment.id}
              showEditCommentForm={(event) => {
                event.preventDefault();
                this.showCommentForm(comment)
                }}
              {...comment}
            />)
        }
      </div>
    )
  }
}

export default CommentList;
