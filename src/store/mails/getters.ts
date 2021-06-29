import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { IMailsState } from './state';

const getters: GetterTree<IMailsState, IRootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
