import { configureStore } from '@reduxjs/toolkit';
import filters from './slices/filter';

/************************************************************** /
/                     Configure store                           /
/ **************************************************************/
const store = () => {
    return configureStore({
        reducer: {
            filters
        }
    });
};

export default store;