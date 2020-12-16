import produce from 'immer'

const initialState = {
  result: [],
  nomination: [],
  searchValue: null,
}

const movies = produce(
  (state, action) => {
    const {type, payload} = action
    switch (type) {
      case 'SET_SEARCH_VALUE':
        state.searchValue = payload
        return state
      case 'ADD_RESULT':
        state.result.push(payload)
        return state
      case 'ADD_NOMINATION':
        state.nomination.push(payload)
        return state
      case 'REMOVE_NOMINATION':
        state.nomination = state.nomination.filter((movie: any) => movie.Title !== payload.Title)
        return state
      case 'SET_MOVIES_STATE':
        state = payload
        return state
      case 'RESET_STATE':
        state = initialState
        return state
      default:
        return state
    }
  },
  {...initialState},
)

export default movies
