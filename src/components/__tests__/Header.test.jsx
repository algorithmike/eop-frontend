import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';

import instantiateStore from '../../store/store';
import Header from '../Header';

test('should render header with logo', () => {
    const store = instantiateStore();

    render(
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Provider store={store}>
                <Header />
            </Provider>
        </MuiPickersUtilsProvider>
    );

    const eopLogo = screen.getByRole('img', { name: 'EOP logo'} )
    expect(eopLogo).toBeInTheDocument;
})