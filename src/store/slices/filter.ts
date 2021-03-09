import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/************************************************************** /
/          Types and interfaces for state management.           /
/ **************************************************************/
export type Sort = 'asc' | 'desc';
export type MediaType = 'image' | 'video' | 'all';

export interface FilterState {
    take?: number;
    sort?: Sort;
    text?: string;
    location?: {
        country: string;
        state: string;
        city: string;
    };
    epochTime?: {
        beginning: string;
        end: string;
    };
    mediaType?: MediaType; // TODO: Implement Filter by MediaType
};

/************************************************************** /
/                       Slice                                   /
/ **************************************************************/
export const initialFilterState = {
    take: 12,
    sort: 'asc',
    text: '',
    mediaType: 'all'
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