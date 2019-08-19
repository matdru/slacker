import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'

import mySaga from '../sagas/rootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
	const store = createStore(
		reducers,
		composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
	)

	sagaMiddleware.run(mySaga)

	return store
}
