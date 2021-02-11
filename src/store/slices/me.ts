import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/************************************************************** /
/          Types and interfaces for state management.           /
/ **************************************************************/
export interface MeState {
    token?: string;
    email?: string;
    realname?: string;
    description?: string;
    profilePicUrl?: string;
};

/************************************************************** /
/                       Slice                                   /
/ **************************************************************/
export const initialMeState = {
    token: undefined,
    email: undefined,
    realname: undefined,
    description: undefined,
    profilePicUrl: undefined
} as MeState;

const meSlice = createSlice({
    name: 'me',
    initialState: initialMeState,
    reducers: {
        setMe: (state, action: PayloadAction<MeState>) => {
            return ({ ...state, ...action.payload })
        },
        unSetMe: () => initialMeState
    }
});

export default meSlice.reducer;
export const { setMe, unSetMe } = meSlice.actions;