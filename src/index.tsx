import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import App from './components/App';
import instantiateStore from './store/store';

const store = instantiateStore();
const client = new ApolloClient({
  link: createUploadLink({
    uri: (process.env.NODE_ENV === 'production')
      ? 'https://eop-backend.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql'
  }),
  cache: new InMemoryCache()
});


const JSX = (
  <ApolloProvider client={client}>
    <Provider store={store}>
        <App />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(JSX, document.getElementById('root'));