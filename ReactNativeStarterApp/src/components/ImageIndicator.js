import React from 'react';
import { Image, TouchableOpacity, ActivityIndicator, StyleSheet, View } from 'react-native';


export default class ImageIndicator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  _onPress = () => {
    this.props.onPress();
  }

  _onLoadStart = () => {
    this.setState({
      isLoading: true,
    });
  }

  _onLoadEnd = () => {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity style={[styles.container, this.props.style]} activeOpacity={0.8} onPress={this._onPress}>
          <Image {...this.props} onLoadStart={this._onLoadStart} onLoadEnd={this._onLoadEnd} />
          <ActivityIndicator style={styles.indicator} size='small' color='gray' animating={this.state.isLoading} />
        </TouchableOpacity>
      );
    }
    return (
      <View style={[styles.container, this.props.style]} >
        <Image {...this.props} onLoadStart={this._onLoadStart} onLoadEnd={this._onLoadEnd} />
        <ActivityIndicator style={styles.indicator} size='small' color='gray' animating={this.state.isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
  },
});

