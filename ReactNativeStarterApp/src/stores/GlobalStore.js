import { types } from 'mobx-state-tree';

const GlobalStore = types.model('GlobalStore', {
  isShowLoading: false,
}).actions(self => ({
  showLoading() {
    self.isShowLoading = true;
  },
  hideLoading() {
    self.isShowLoading = false;
  },
})).create({});

export default GlobalStore;
