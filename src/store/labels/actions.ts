import { ActionTree } from 'vuex';
import { ILabel } from 'src/types/Labels.d';
import { IRootState } from '../index';
import { ILabesState } from './state';
import { TYPES } from './mutations';

const actions: ActionTree<ILabesState, IRootState> = {
  add({ commit }, label: ILabel) {
    commit(TYPES.ADD, label);
  },
};

export default actions;
