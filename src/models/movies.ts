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
        break
      case 'ADD_RESULT':
        state.result.push(payload)
        break
      case 'ADD_NOMINATION':
        state.nomination.push(payload)
        break
      case 'REMOVE_NOMINATION':
        state.nomination = state.nomination.filter((movie: any) => movie.Title !== payload.Title)
        break
      default:
        return state
    }
  },
  {...initialState},
)

export default movies
