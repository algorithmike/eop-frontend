import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/************************************************************** /
/          Types and interfaces for state management.           /
/ **************************************************************/
export type Sort = 'ASC' | 'DESC';

export interface FilterState {
    text?: string;
    media_type?: 'IMAGES' | 'VIDEOS' | 'ALL';
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

/************************************************************** /
/                       Slice                                   /
/ **************************************************************/
export const initialFilterState = {
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

export default filterSlice.reducer;
export const { updateFilter, resetFilter } = filterSlice.actions;