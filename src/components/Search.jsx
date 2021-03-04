import React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/Search.scss';
import { updateFilter } from '../store/slices/filter'


const Search = (props) => {
  return (
    <div className="mainSearch">
      <input
        className="filterInput"
        placeholder="Search"
        variant="outlined"
        onChange={(e) => {
          props.updateFilter({ text: e.target.value })
        }}
        value={props.filters.text}
      />
      <SearchIcon />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters
})
const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => (dispatch(updateFilter(filter)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search); 