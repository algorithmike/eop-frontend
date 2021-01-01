import { createSlice, configureStore } from '@reduxjs/toolkit';

/*                                               /
/   Types and interfaces for state management.   /
/                                               */
type Sort = 'ASC' | 'DESC';

interface SearchFilter {
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
const initialFilterState: SearchFilter = {
    text: '',
    media_type: 'ALL'
};

const filterSlice = createSlice({
    name: 'filters',
    initialState: initialFilterState,
    reducers: {
        temporaryAction: (state, {payload}) => ({...state, ...payload})
    }
});

const filterReducer = filterSlice.reducer;
const { temporaryAction } = filterSlice.actions;

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

store.dispatch(temporaryAction({
    text: 'This is a test!',
    media: 'ALL'
}));

unsubscribe();

console.log('************* Playground Loaded *************');
export {};