import meReducer, { setMe, unSetMe, initialMeState } from '../me';

const meState = {
    token: 'test token',
    email: 'test email',
    realname: 'test realname',
    description: 'test description'
};

test('generate correct action with payload for setMe actionGenerator', () => {
    const action = setMe(meState)
    expect(action.type).toEqual('me/setMe')
    expect(action.payload).toEqual(meState)
})

test('generate correct action with payload for unSetMe actionGenerator', () => {
    const action = unSetMe
    expect(action.type).toEqual('me/unSetMe')
})

test('should setup initialMeState', () => {
    const state = meReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual(initialMeState)
})

test('dispatching setMe should update state', () => {
    const updatedState = meReducer(undefined, setMe(meState))

    expect(updatedState).toEqual({
        ...initialMeState,
        ...meState
    })
})

test('dispatching unSetMe should update state back to initialMeState', () => {
    meReducer(undefined, setMe(meState))
    const reInitializedMeState = meReducer(undefined, unSetMe())

    expect(reInitializedMeState).toEqual(initialMeState)
})