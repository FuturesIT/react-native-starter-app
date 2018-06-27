import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = createReactNavigationReduxMiddleware('root', state => state.navigation);
export const addListener = createReduxBoundAddListener('root');
export const store = createStore(reducers, applyMiddleware(middleware, thunk));
