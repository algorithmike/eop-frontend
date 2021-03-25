import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import renderer from 'react-test-renderer';
import DayjsUtils from '@date-io/dayjs';

import instantiateStore from '../../store/store';
import Header from '../Header';

test('should render header correctly', () => {
    const store = instantiateStore();

    const component = renderer.create(
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Provider store={store}>
                <Header />
            </Provider>
        </MuiPickersUtilsProvider>
    );
    const tree = component.toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})