import { combineReducers } from 'redux';
import StackNavigator from './stack-navigator';


const initialState = StackNavigator.router.getStateForAction(StackNavigator.router.getActionForPathAndParams('Main'));

const navigationReducer = (state = initialState, action) => {
  if (action.type.startsWith('Navigation/')) {
    const { routeName } = action;
    const lastRoute = state.routes[state.routes.length - 1];
    if (routeName === lastRoute.routeName) return state;
  }
  const nextState = StackNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default combineReducers({
  navigation: navigationReducer,
});
