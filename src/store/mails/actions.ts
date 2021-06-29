import { ActionTree } from 'vuex';
import { IMail } from 'src/types/Mails.d';
import { IRootState } from '../index';
import { IMailsState } from './state';
import { TYPES } from './mutations';

const actions: ActionTree<IMailsState, IRootState> = {
  add({ commit }, mail: IMail) {
    commit(TYPES.ADD, mail);
  },
  delete({ commit }, id: string) {
    commit(TYPES.DELETE, id);
  },
};

export default actions;
