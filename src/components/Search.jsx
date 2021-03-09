import { useState } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { DatePicker } from "@material-ui/pickers";

import '../styles/Search.scss';
import { updateFilter } from '../store/slices/filter';


const Search = (props) => {
  const [localFilterState, setLocalFilterState] = useState({
    text: ''
  });

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  
  const handleFromDateChange = (date) => {
    if(!date){
      setFromDate(new Date())
      setToDate(new Date())
    }
    else{
      setFromDate(date.$d)
    }
  }

  const handleToDateChange = (date) => {
    if(!date){
      setFromDate(new Date())
      setToDate(new Date())
    }
    else{
      setToDate(date.$d)
    }
  }

  const handleSearchOnClick = () => {
    props.updateFilter({
      ...localFilterState,
      epochTime: {
        beginning: fromDate.getTime().toString(),
        end: toDate.getTime().toString()
      }
    })
  }

  return (
    <div className="main">
      <div className="main__search">
        <input
          value={localFilterState.text}
          className="filterInput"
          placeholder="Search"
          variant="outlined"
          onChange={(e) => {
            setLocalFilterState({ text: e.target.value })
          }}
        />
        <SearchIcon onClick={handleSearchOnClick}/>
      </div>
      <div className="main__timeFilters">
        <DatePicker
          className="fromPicker"
          format="MMMM D, YYYY"
          maxDate={toDate}
          maxDateMessage="'From' date may not surpass 'To' date."
          autoOk
          label="From"
          clearable
          disableFuture
          value={fromDate}
          onChange={date => handleFromDateChange(date)}
        />
        <DatePicker
          className="toPicker"
          format="MMMM D, YYYY"
          minDate={fromDate}
          maxDateMessage="'To' date may not preced 'From' date."
          autoOk
          label="To"
          clearable
          disableFuture
          value={toDate}
          onChange={handleToDateChange}
        />
      </div>
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