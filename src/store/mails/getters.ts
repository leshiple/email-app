import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { IMailsState } from './state';

const getters: GetterTree<IMailsState, IRootState> = {
  byBranch(state) {
    return (branch: string) => state.mails.filter((mail) => mail.branch === branch);
  },
};

export default getters;
