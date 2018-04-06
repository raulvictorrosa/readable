import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { getCategories } from '../actions/Categories';
import { capitalize } from '../utils/helper';

class Categories extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
  }

  state = { open: true }

  componentDidMount() {
    this.props.fetchCategories()
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes, categories, location } = this.props

    if (categories.length > 0) {
      return (
        <div>
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Categories" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {categories.map((category, index) => (
                location.pathname === `/${category.path}`
                  ? <ListItem button key={category.path} className={classes.nested}>
                    <ListItemText primary={capitalize(category.name)} />
                  </ListItem>
                  : <ListItem button key={category.path} component={Link} to={`/${category.path}`} className={classes.nested}>
                    <ListItemText primary={capitalize(category.name)} />
                  </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      )
    }

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="No Categories" />
        </ListItem>
      </div>
    )
  }
}

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
})

const mapStateToProps = categories => ({
  ...categories
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(getCategories())
})

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Categories)
