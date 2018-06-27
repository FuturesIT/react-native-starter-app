// React
import React from 'react';
import { StyleSheet, Alert } from 'react-native';
// Libraries
import { Input, Container, Button, Text, Content } from 'native-base';
// Source
import { BaseComponent, Header } from '../../components';
import Validator from '../../utils/validator';
import UserApi from '../../api/UserApi';
import GlobalStore from '../../stores/GlobalStore';
import { Screens } from '../../constants';

export default class RegisterScreen extends BaseComponent {

  state = {
    email: '',
    password: '',
    phone: '',
  }

  _onPressRegister = async () => {
    const { email, password, phone } = this.state;
    const data = { email, password, phone };
    const error = Validator.validateRegister(data);
    if (error) {
      Alert.alert('Error', error);
    }
    GlobalStore.showLoading();
    const result = await UserApi.register(data);
    GlobalStore.hideLoading();
    if (!result.success) {
      Alert.alert(result.title, result.message);
    } else {
      this.resetTo(Screens.HomeScreen);
      // Go some where
    }
  }

  render() {
    return (
      <Container>
        <Header title='Register' />
        <Content contentContainerStyle={styles.content}>

          <Input onChangeText={email => this.setState({ email })} style={styles.input} placeholder='Email' />
          <Input onChangeText={password => this.setState({ password })} secureTextEntry style={styles.input} placeholder='Password' />
          <Input onChangeText={phone => this.setState({ phone })} style={styles.input} placeholder='Phone No' />
          <Button onPress={this._onPressRegister} style={styles.button}>
            <Text>Register</Text>
          </Button>

        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
  },
  input: {
    width: '70%',
    margin: 10,
    padding: 5,
    borderColor: '#00000080',
    borderRadius: 8,
    borderWidth: 1,
  },
});
