import { ActionTree } from 'vuex';
import { IRootState } from '../index';
import { IFoldersState } from './state';

const actions: ActionTree<IFoldersState, IRootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
