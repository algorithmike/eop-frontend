import { updateFilter, resetFilter } from '../filter';

test('generate correct action with payload for updateFilter actionGenerator', () => {
    const updatedFilterMatcher = {
        take: 5,
        sort: 'desc',
        text: 'Test Filter',
        mediaType: 'image',
        epochDate: {
            beginning: (new Date(0)).getTime(),
            end: (new Date(1)).getTime()
        }
    }

    const action = updateFilter(updatedFilterMatcher)

    expect(action.type).toEqual('filters/updateFilter')
    expect(action.payload).toEqual(updatedFilterMatcher)
})

test('actionCreator creates correct action resetFilter actionGenerator', () => {
    const action = resetFilter()

    expect(action.type).toEqual('filters/resetFilter')
})