import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import instantiateStore from './store/store';
import './styles/index.scss';

const store = instantiateStore();
const client = new ApolloClient({
  link: createUploadLink({
    uri: (process.env.NODE_ENV === 'production')
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:4000/graphql'
  }),
  cache: new InMemoryCache()
});


const JSX = (
  <MuiPickersUtilsProvider utils={DayjsUtils}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </MuiPickersUtilsProvider>
);

ReactDOM.render(JSX, document.getElementById('root'));