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
  setFolder({ commit }, payload) {
    commit(TYPES.SET_FOLDER, payload);
  },
  toggleStarred({ commit }, payload) {
    commit(TYPES.TOGGLE_STARRED, payload);
  },
};

export default actions;
