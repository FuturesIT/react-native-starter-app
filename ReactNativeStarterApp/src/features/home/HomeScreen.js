// React
import React from 'react';
import { View } from 'react-native';
// Libraries
import { Text } from 'native-base';
// Source
import { BaseComponent } from '../../components';

export default class HomeScreen extends BaseComponent {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>You are logged in</Text>
      </View>
    );
  }

}
