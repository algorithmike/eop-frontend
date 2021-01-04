import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filter';

/************************************************************** /
/                     Configure store                           /
/ **************************************************************/
const store = () => {
    return configureStore({
        reducer: {
            filterReducer
        }
    });
};

export default store;