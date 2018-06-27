export default class Generator {

  static randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  static newUUID = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

}
