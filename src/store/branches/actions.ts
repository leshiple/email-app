import { ActionTree } from 'vuex';
import { IBranch } from 'src/types/Branches.d';
import { IRootState } from '../index';
import { IBranchState } from './state';
import { TYPES } from './mutations';

const actions: ActionTree<IBranchState, IRootState> = {
  add({ commit }, branch: IBranch) {
    commit(TYPES.ADD, branch);
  },
  delete({ commit }, id: string) {
    commit(TYPES.DELETE, id);
  },
};

export default actions;
