import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import instantiateStore from './store/store';


import { updateFilter, resetFilter } from './store/slices/filter' // For Testing

const store = instantiateStore();
const JSX = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(JSX, document.getElementById('root'));

/************************************************************** /
/                           Testing.                            /
/ **************************************************************/
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