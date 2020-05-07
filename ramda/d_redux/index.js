const R = require('ramda');
const customers = require('./customers');

// 1. Selectors (api request state)
const createSelector = path => R.memoizeWith(R.identity, R.path(path))
const isLoading = createSelector(['ui', 'loading'])

// 2. Reducer (state mutation)
Object.assign({}, state, {
  balance: newBalance
})
R.assoc('balance', newBalance, state)
R.mergeDeepRight(state, {balance: newBalance})