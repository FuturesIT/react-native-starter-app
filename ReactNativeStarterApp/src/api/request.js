import apiConfig from './api-config';

const NoInternetError = 'The internet connection appears to be offline. Please try again later';

export const handleResponseSuccess = response => ({
  success: true,
  data: response.data,
  code: 200,
});

export const handleResponseError = ({ response, request }) => {
  if (response) {
    let message;
    if (response.data.errors) {
      const { errors } = response.data;
      message = Object.keys(errors).map(key => errors[key].reduce((a, b) => `${a}, ${b}`)).reduce((a, b) => `${a}\n${b}`);
    }
    return {
      code: response.status,
      success: false,
      title: response.data.message || 'Server error',
      message: message || response.data.message || response.data,
      errorCode: response.data.code || 'unknown',
    };
  }
  if (request) {
    let message = 'Something went wrong';
    if (request._response) {
      if (request._response.contains('Unable to resolve host')) {
        message = NoInternetError;
      } else {
        message = request._response;
      }
    }
    return {
      code: -1,
      success: false,
      title: 'Error',
      message,
      errorCode: 'unknown',
    };
  }
  return {
    code: -1,
    success: false,
    title: 'Server error',
    message: 'Unknown error',
    errorCode: 'unknown',
  };
};


/**
 * @param method request method GET POST PUT DELETE
 * @param url url of request
 * @param params query parameters
 * @param data body for POST request
 * @param isAbsoluteUrl is url is absolute or part
 */
export default async (method, url, params, data, isAbsoluteUrl) => {
  try {
    // const headers = {};
    // if (GlobalStore.token) {
    //   headers.Authorization = `Bearer ${GlobalStore.token.value}`;
    // }

    // Alter defaults of axios instance
    // apiConfig.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    const response = await apiConfig.request({
      method, url, params, data,
    });
    return handleResponseSuccess(response);
  } catch (error) {
    return handleResponseError(error);
  }
};
