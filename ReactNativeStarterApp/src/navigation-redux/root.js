/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Stack from './navigator';
import { store } from './store';

export default () => (
  <Provider store={store}>
    <Stack />
  </Provider>
);

export const appStore = store;
