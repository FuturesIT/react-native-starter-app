import Schema from 'validate';

const Rules = {
  email: {
    type: String,
    required: true,
    length: { min: 3, max: 32 },
    message: {
      type: 'Email must be a string.',
      required: 'Email is required.',
      length: 'Email min length is 3, max length is 32.',
    },
  },
  password: {

  },
};

export default class Validator {

  static validateRegister = (data) => {
    const user = new Schema({
      email: Rules.email,
      // password, phone ...
    });

    const errors = user.validate(data);
    if (errors && errors.length > 0) {
      return errors.map(error => error.message).reduce((msg, msg2) => `${msg}\n${msg2}`);
    }
    return null;
  }

}
