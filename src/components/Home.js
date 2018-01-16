import React, { Component } from 'react';
// import { connect } from 'react-redux'

import Grid from 'material-ui/Grid';

import Post from './Post'

import * as ReadbleAPI from '../utils/ReadbleAPI'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    ReadbleAPI.getPosts().then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    const { posts } = this.state
    console.log(posts)

    return (
      <Grid item xs={12}>
        <Grid container spacing={24}>
          {posts.map(post => (
            <Grid key={post.id} item xs={4}>
              <Post
                post={post}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

// function mapStateToProps({ posts }) {
//   return {
//     calendar: dayOrder.map((day) => ({
//       day,
//       meals: Object.keys(calendar[day]).reduce((meals, meal) => {
//         meals[meal] = calendar[day][meal]
//           ? food[calendar[day][meal]]
//           : null

//         return meals
//       }, {})
//     })),
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     selectRecipe: (data) => dispatch(addRecipe(data)),
//     remove: (data) => dispatch(removeFromCalendar(data))
//   }
// }

export default Home

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
