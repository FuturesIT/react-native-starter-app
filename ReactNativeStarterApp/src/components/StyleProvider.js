import React from 'react';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

export default class Provider extends React.PureComponent {
  render() {
    return <StyleProvider style={getTheme(platform)}>{this.props.children}</StyleProvider>;
  }
}
