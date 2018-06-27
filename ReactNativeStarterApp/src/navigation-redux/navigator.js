/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { observer } from 'mobx-react';
import StackNavigator from './stack-navigator';
import { addListener } from './store';
// import Store from '../stores/GlobalStore';
import { Screens } from '../constants';
import { Hud } from '../components';
import GlobalStore from '../stores/GlobalStore';

@observer
class Navigator extends React.Component {


  componentDidMount = () => {
    this.addBackListener();
  };

  componentWillUnmount = () => {
    this.removeBackListener();
  };

  addBackListener() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);
  }

  removeBackListener = () => {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
  }

  _handleBackPress = () => {
    const nav = this.navigator.props.navigation;
    const { routes } = nav.state.routes[0];
    const { routeName } = routes[routes.length - 1];
    if (routeName === Screens.HomeScreen) {
      BackHandler.exitApp();
    } else {
      nav.pop();
    }
    return true;
  }

  push = (routeName, params) => {
    const action = NavigationActions.navigate({
      routeName,
      params,
    });
    this.props.dispatch && this.props.dispatch(action);
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <StackNavigator
          ref={(r) => { this.navigator = r; }}
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
            addListener,
          })}
        />
        {
          GlobalStore.isShowLoading && <Hud loading />
        }
      </View>
    );
  }
}

export default connect(state => ({
  navigation: state.navigation,
}))(Navigator);
