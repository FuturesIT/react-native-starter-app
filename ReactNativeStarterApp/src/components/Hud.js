import React from 'react';
import { ActivityIndicator, StyleSheet, Animated } from 'react-native';


export default class Hud extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      show: this.props.loading || false,
      animation: new Animated.Value(this.props.loading ? 1 : 0),
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.loading) {
      this.show();
    } else {
      this.hide();
    }
  }

  show = () => {
    this.setState({ show: true });
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 200,
    }).start();
  }

  hide = async () => new Promise((resolve, reject) => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
    }).start(() => {
      this.setState({ show: false });
      resolve();
    });
  })

  render() {
    const color = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .4)'],
    });
    const containerStyle = {
      backgroundColor: color,
    };
    const translateY = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 0],
    });
    const boxStyle = {
      opacity: this.state.animation,
      transform: [
        { translateY }
      ],
    };
    if (!this.state.show) {
      return null;
    }
    return (
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.View style={[styles.box, boxStyle]}>
          <ActivityIndicator />
        </Animated.View>
      </Animated.View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  box: {
    backgroundColor: '#000000',
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
