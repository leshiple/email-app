import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { ILabesState } from './state';

const getters: GetterTree<ILabesState, IRootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
