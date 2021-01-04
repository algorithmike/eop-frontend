import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import instantiateStore from './store/store';

const store = instantiateStore();
const JSX = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(JSX, document.getElementById('root'));

const unsubscribe = store.subscribe(() => {
  console.log('Current State: ', store.getState());
});