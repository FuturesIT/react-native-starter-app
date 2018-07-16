import Reactotron, {
  asyncStorage,
  networking,
  trackGlobalErrors,
  openInEditor
} from 'reactotron-react-native';
import { mst } from 'reactotron-mst';

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(asyncStorage())
  .use(trackGlobalErrors())
  .use(networking())
  .use(openInEditor())
  .use(mst())
  .connect(); // let's connect!

Reactotron.clear();
