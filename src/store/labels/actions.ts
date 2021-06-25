import { ActionTree } from 'vuex';
import { ILabel, IPayloadEditLabel } from 'src/types/Labels.d';
import { IRootState } from '../index';
import { ILabesState } from './state';
import { TYPES } from './mutations';

const actions: ActionTree<ILabesState, IRootState> = {
  add({ commit }, label: ILabel) {
    commit(TYPES.ADD, label);
  },
  edit({ commit }, payload: IPayloadEditLabel) {
    commit(TYPES.EDIT, payload);
  },
  delete({ commit }, name: string) {
    commit(TYPES.DELETE, name);
  },
};

export default actions;
