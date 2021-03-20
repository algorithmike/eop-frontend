import { setMe, unSetMe } from '../me';

test('generate correct action with payload for setMe actionGenerator', () => {
    const meStateMatcher = {
        token: 'test-token',
        email: 'test@email.com',
        realname: 'Test Name',
        description: 'This is a test description'
    }

    const action = setMe(meStateMatcher)
    expect(action.type).toEqual('me/setMe')
    expect(action.payload).toEqual(meStateMatcher)
})

test('generate correct action with payload for unSetMe actionGenerator', () => {
    const action = unSetMe
    expect(action.type).toEqual('me/unSetMe')
})