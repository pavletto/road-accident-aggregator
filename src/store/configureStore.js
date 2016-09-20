import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    let store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)

        })

    }

    return store

}
