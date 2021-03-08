import { useState } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/Search.scss';
import { updateFilter } from '../store/slices/filter';


const Search = (props) => {
  const [localFilterState, setLocalFilterState] = useState({
    text: ''
  });

  return (
    <div className="mainSearch">
      <input
        value={localFilterState.text}
        className="filterInput"
        placeholder="Search"
        variant="outlined"
        onChange={(e) => {
          setLocalFilterState({ text: e.target.value })
        }}
      />
      <SearchIcon onClick={() => {props.updateFilter(localFilterState)}}/>
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