import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { IFoldersState } from './state';

const getters: GetterTree<IFoldersState, IRootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
