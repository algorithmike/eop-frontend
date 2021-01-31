import { connect, ConnectedProps } from 'react-redux';
import { TextField } from '@material-ui/core'
import { updateFilter, FilterState } from '../store/slices/filter'


const Search = (props: PropsType) => {
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

const mapStateToProps = (state: any) => ({
    filters: state.filters as FilterState
})
const mapDispatchToProps = (dispatch: any) => ({
  updateFilter: (text: FilterState) => (dispatch(updateFilter(text)))
})
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsType = ConnectedProps<typeof connector>;

export default connector(Search); 