import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { PropTypes } from 'prop-types';

import Home from './Home'

class Index extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/create-post' component={CreatePost} />
        <Route exact path='/:category' component={Category} />
        <Route path='/:category/:post_id' component={PostDetail} /> */}
      </Switch>
    )
  }
}

export default Index
