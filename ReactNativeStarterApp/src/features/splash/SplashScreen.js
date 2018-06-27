// React
import React from 'react';
// Libraries
// Source
// import Store from '../../stores/GlobalStore';
import { BaseComponent, Hud } from '../../components/index';
import Screens from '../../constants/Screens';

export default class SplashScreen extends BaseComponent {

  componentDidMount = () => {
    this.resetTo(Screens.RegisterScreen);
  };


  render() {
    return <Hud loading />;
  }
}
