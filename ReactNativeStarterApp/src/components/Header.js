import React from 'react';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Icon, Button, Title, Left, Right, Body, Text } from 'native-base';

const ios = Platform.OS === 'ios';

export default class CustomHeader extends React.PureComponent {
  _renderLeft = () => {
    const { iconLeft, textLeft } = this.props;
    if (textLeft) {
      if (iconLeft) {
        return (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.props.onLeftPress}
            activeOpacity={0.8}
          >
            <Icon white name={iconLeft} style={styles.icon} />
            {ios ? <Text white>{textLeft}</Text> : null}
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity style={{ padding: 5 }} onPress={this.props.onLeftPress}>
          <Text white>{textLeft}</Text>
        </TouchableOpacity>
      );
    }

    if (iconLeft) {
      return (
        <Button transparent onPress={this.props.onLeftPress}>
          <Icon name={iconLeft} />
        </Button>
      );
    }

    return null;
  }

  _renderRight = () => {
    const { iconRight, textRight } = this.props;

    if (textRight) {
      if (iconRight) {
        return (
          <Button transparent onPress={this.props.onRightPress}>
            <Icon name={iconRight} />
            {ios ? <Text >{textRight}</Text> : null}
          </Button>
        );
      }
      return (
        <TouchableOpacity style={{ padding: 5 }} onPress={this.props.onRightPress}>
          <Text white>{textRight}</Text>
        </TouchableOpacity>
      );
    }

    if (iconRight) {
      return (
        <Button transparent onPress={this.props.onRightPress}>
          <Icon name={iconRight} />
        </Button>
      );
    }

    return null;
  }

  render() {
    const { title } = this.props;

    // const left = iconLeft ? <Button onPress={this.props.onLeftPress} transparent><Icon name={iconLeft} /></Button> : null;
    // const right = iconRight ? <Button onPress={this.props.onRightPress} transparent><Icon name={iconRight} /></Button> : null;

    return (
      <Header {...this.props}>
        <Left>{this._renderLeft()}</Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>{this._renderRight()}</Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFF',
    marginRight: 5,
  },
});

