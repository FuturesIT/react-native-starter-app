import Reactoron from 'reactotron-react-native';

export default class Logger {

  static log = (msg) => {
    Reactoron.log(msg);
    if (__DEV__) {
      console.log(msg);
    }
  }

  static error = (msg) => {
    if (__DEV__) {
      console.error(msg);
    }
    Reactoron.error(msg);
  }

}
