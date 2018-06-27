import { StackNavigator } from 'react-navigation';
import { Screens } from '../constants';
import SplashScreen from '../features/splash';
import HomeScreen from '../features/home';
import RegisterScreen from '../features/register';

const stack = {};
stack[Screens.SplashScreen] = SplashScreen;
stack[Screens.RegisterScreen] = RegisterScreen;
stack[Screens.HomeScreen] = HomeScreen;

const mainStack = StackNavigator(stack, {
  navigationOptions: {
    header: null,
  },
});

const rootStack = StackNavigator(
  {
    Main: {
      screen: mainStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default rootStack;
