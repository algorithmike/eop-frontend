import store from '../../store'
import { initialFilterState } from '../filter'
import { initialMeState } from '../me'

test('configured store initializes', () => {
    const state = store().getState();
    
    expect(state).toEqual({
        filters: initialFilterState,
        me: initialMeState
    })
})