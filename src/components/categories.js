import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
// import { capitalize } from '../utils/helper';
import { capitalizeFirst } from '../utils/helper';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  menuLinkItem: {
    textDecoration: 'none'
  }
});

class Categories extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
  }

  state = { open: true }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes, categories } = this.props

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Categories" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {categories.map((category, index) => (
              // window.location.pathname === `/category/${category.path}` ?
              window.location.pathname === `/${category.path}` ?
                <ListItem button key={category.path} className={classes.nested}>
                  <ListItemText primary={capitalizeFirst(category.name)} />
                  {/* <ListItemText primary={capitalize(category.name)} /> */}
                </ListItem>
                :
                // <ListItem button key={category.path} component={Link} to={`/category/${category.path}`} className={classes.nested}>
                <ListItem button key={category.path} component={Link} to={`/${category.path}`} className={classes.nested}>
                  <ListItemText primary={capitalizeFirst(category.name)} />
                  {/* <ListItemText primary={capitalize(category.name)} /> */}
                </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps),
)(Categories);
