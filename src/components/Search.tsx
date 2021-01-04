import { connect } from 'react-redux';

import { updateFilter, resetFilter, FilterState } from '../store/slices/filter'

// Need to sort out props typing
const Search = (props: { dispatch: (arg0: { payload: FilterState; type: string; }) => void; }) => {
  return (
    <div>
      <p>This is the Search page.</p>
      <input type='text' onChange={(e) => {
        props.dispatch(updateFilter({ text: e.target.value }))
      }} />
    </div>
  );
};

export default connect()(Search);

/************************************************************** /
/                           Testing.                            /
/ **************************************************************/
// const unsubscribe = store.subscribe(() => {
//   console.log('Current State: ', store.getState());
// });

// store.dispatch(updateFilter({
//   text: 'This is a test!',
//   media_type: 'IMAGES'
// }));

// store.dispatch(resetFilter());

// unsubscribe();