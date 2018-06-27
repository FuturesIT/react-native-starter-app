import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Alert, BackHandler } from 'react-native';

export default class BaseComponent extends React.Component {

  // addBackListener() {
  //   BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);
  // }

  // removeBackListener = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
  // }

  // _handleBackPress = () => {
  //   if (this.props.navigation) {
  //     const { routeName } = this.props.navigation.state;
  //     if (routeName === Screens.Login || routeName === Screens.Home) {
  //       BackHandler.exitApp();
  //     } else {
  //       this.pop();
  //     }
  //     return true;
  //   }
  //   return false;
  // }

  push = (routeName, params) => {
    const action = NavigationActions.navigate({
      routeName,
      params,
    });
    this.props.navigation && this.props.navigation.dispatch(action);
  };

  pop = () => {
    this.props.navigation && this.props.navigation.goBack();
  }

  popMany = (number) => {
    this.props.navigation && this.props.navigation.pop(number);
  }

  resetTo = (routeName, params) => {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName, params })
      ],
    });
    this.props.navigation && this.props.navigation.dispatch(action);
  }

  alert = (title, message = '') => {
    Alert.alert(title, message);
  }
}
