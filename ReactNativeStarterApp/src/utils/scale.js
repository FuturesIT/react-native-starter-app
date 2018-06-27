import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 375;
const baseHeigh = 667;

const vw = width / baseWidth;
const vh = height / baseHeigh;


export { vw, vh };

