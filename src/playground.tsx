import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

/*                                               /
/   Types and interfaces for state management.   /
/                                               */
type Sort = 'ASC' | 'DESC';

interface FilterState {
    text: string;
    media_type: 'IMAGES' | 'VIDEOS' | 'ALL';
    event?: string;
    location?: {
        longitude: number;
        latitude: number;
        sort: Sort;
    };
    record_date?: {
        text: string;
        sort: Sort;
    };
    upload_date?: {
        text: string;
        sort: Sort;
    };
};

/*                                               /
/   Slices of state.                             /
/                                               */
const initialFilterState = {
    text: '',
    media_type: 'ALL'
} as FilterState;

const filterSlice = createSlice({
    name: 'filters',
    initialState: initialFilterState,
    reducers: {
        updateFilter: (state, action: PayloadAction<FilterState>) => {
            return ({ ...state, ...action.payload })
        },
        resetFilter: () => initialFilterState
    }
});

const filterReducer = filterSlice.reducer;
const { updateFilter, resetFilter } = filterSlice.actions;

/*                                               /
/   Configure store etc.                         /
/                                               */
const store = configureStore({
    reducer: {
        filterReducer
    }
});

/*                                               /
/   Testing                                      /
/                                               */
const unsubscribe = store.subscribe(() => {
    console.log('Current State: ', store.getState());
});

store.dispatch(updateFilter({
    text: 'This is a test!',
    media_type: 'IMAGES'
}));

store.dispatch(resetFilter());

unsubscribe();

console.log('************* Playground Loaded *************');
export {};