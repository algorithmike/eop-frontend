import filtersReducer, { updateFilter, resetFilter, initialFilterState } from '../filter';

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

test('should setup initialFilterState', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    
    expect(state).toEqual(initialFilterState)
})

test('dispatching updateFilter should update state for only text filter', () => {
    const updatedFilterText = 'Updated filter text.'
    const updatedState = filtersReducer(undefined, updateFilter({ text: updatedFilterText }))

    expect(updatedState).toEqual({
        ...initialFilterState,
        text: updatedFilterText
    })
})

test('dispatching resetFilter should update state to match initialFilterState', () => {
    const updatedFilterText = 'Updated filter text.'
    const updatedState = filtersReducer(undefined, updateFilter({ text: updatedFilterText }))

    expect(updatedState).toEqual({
        ...initialFilterState,
        text: updatedFilterText
    })

    const resetState = filtersReducer(undefined, resetFilter())

    expect(resetState).toEqual(initialFilterState)
})