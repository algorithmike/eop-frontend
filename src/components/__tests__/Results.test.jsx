import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';

import instantiateStore from '../../store/store';
import Results from '../Results';

test('should render "Loading..." message', () => {
    const store = instantiateStore();
    const client = new ApolloClient({
        link: createUploadLink({
          uri: (process.env.NODE_ENV === 'production')
            ? process.env.REACT_APP_API_URL
            : 'http://localhost:4000/graphql'
        }),
        cache: new InMemoryCache()
      });

    render(
        <ApolloProvider client={client}>
            <MuiPickersUtilsProvider utils={DayjsUtils}>
                <Provider store={store}>
                    <Results />
                </Provider>
            </MuiPickersUtilsProvider>
        </ApolloProvider>
    );

    const loadingMessage = screen.getByRole('heading', { level: 2 })
    expect(loadingMessage.innerHTML).toMatch(/loading/i);
})