import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { IBranchState } from './state';

const getters: GetterTree<IBranchState, IRootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
