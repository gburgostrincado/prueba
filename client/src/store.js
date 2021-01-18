import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


import reducer from './reducers'

const intialState = {
    isLoading: true,
}

const middleware = [thunk]


const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store