import { connect } from 'react-redux';
import { TextField } from '@material-ui/core'

import { updateFilter } from '../store/slices/filter'


const Search = (props) => {
  return (
      <TextField
        variant="outlined"
        onChange={(e) => {
          props.updateFilter({ text: e.target.value })
        }}
        value={props.filters.text}
      />
  );
};

const mapStateToProps = (state) => ({
    filters: state.filters
})
const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => (dispatch(updateFilter(filter)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search); 