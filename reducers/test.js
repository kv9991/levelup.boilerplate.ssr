// Reducer Example
const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

const test = (state = exampleInitialState, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
    case 'TICK':
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default: return state
  }
}

export default test;