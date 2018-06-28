// a library to wrap and simplify api calls
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import routes from './routes';

// our "constructor"
const create = (baseURL = routes.BaseUrl) => {
  let host = baseURL;
  if (DeviceInfo.getBundleId === 'PRODUCTION') {
    host = 'PRODUCTION';
  }
  //
  // Create and configure an apisauce-based api object.
  //
  const api = axios.create({
    host,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 15 second timeout...
    timeout: 15000,
  });

  return {
    api,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
