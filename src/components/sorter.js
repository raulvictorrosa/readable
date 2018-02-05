import React from 'react';
import { connect } from 'react-redux';

import { setSortBy } from '../actions/sort-by';

const Sorter = ({ content, sortBy, onSelectSortBy }) => {
  const getValueFromParams = ({ [content]: { type, order }}) => `${type}-${order}`;
  const getParamsFromValue = (value) => value.split('-');
  return (
    <div className='sorter'>
      <select value={getValueFromParams(sortBy)}
              onChange={(event) => onSelectSortBy(content)(...getParamsFromValue(event.target.value))}>
        <option value='voteScore-descending'>Score: Highest to lowest</option>
        <option value='voteScore-ascending'>Score: Lowest to highest</option>
        <option value='timestamp-descending'>Posted Date: Newest to oldest</option>
        <option value='timestamp-ascending'>Posted Date: Oldest to newest</option>
      </select>
    </div>
  )
}

const mapStateToProps = ({ sortBy }) => ({
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  onSelectSortBy: (content) => (type, order) => dispatch(setSortBy(content, type, order))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
