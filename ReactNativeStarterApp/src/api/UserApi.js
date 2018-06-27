import request from './request';
import routes from './routes';

export default class UserApi {

  // static register = data => request('POST', routes.Register, null, data)

  static register = data =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          code: 200,
          data: [],
        });
      }, 3000);
    })


}
