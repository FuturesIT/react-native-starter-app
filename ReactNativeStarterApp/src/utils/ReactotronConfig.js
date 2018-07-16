import { NativeModules } from 'react-native';
import Reactotron, {
  asyncStorage,
  networking,
  trackGlobalErrors,
  openInEditor
} from 'reactotron-react-native';
import { mst } from 'reactotron-mst';

let scriptHostname;
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

Reactotron
  .configure({
    host: scriptHostname,
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(asyncStorage())
  .use(trackGlobalErrors())
  .use(networking())
  .use(openInEditor())
  .use(mst())
  .connect(); // let's connect!

Reactotron.clear();
