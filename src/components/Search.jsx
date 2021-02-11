import { connect, ConnectedProps } from 'react-redux';
import { TextField } from '@material-ui/core'
import { updateFilter, FilterState } from '../store/slices/filter'


const Search = (props) => {
  return (
    <div>
      <p>This is the Search page.</p>
      <TextField
        variant="outlined"
        onChange={(e) => {
          props.updateFilter({ text: e.target.value })
        }}
        value={props.filters.text}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
    filters: state.filters
})
const mapDispatchToProps = (dispatch) => ({
  updateFilter: (text) => (dispatch(updateFilter(text)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search); 