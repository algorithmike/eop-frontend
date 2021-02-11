import { configureStore } from '@reduxjs/toolkit';
import filters from './slices/filter';
import me from './slices/me';

/************************************************************** /
/                     Configure store                           /
/ **************************************************************/
const store = () => {
    return configureStore({
        reducer: {
            filters,
            me
        }
    });
};

export default store;