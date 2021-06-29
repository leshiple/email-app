import { MutationTree } from 'vuex';
import { IMail } from 'src/types/Mails.d';
import { IMailsState } from './state';

export const TYPES = {
  ADD: 'ADD',
  DELETE: 'DELETE',
};

const mutation: MutationTree<IMailsState> = {
  [TYPES.ADD](state: IMailsState, mail: IMail) {
    state.mails.push(mail);
  },
  [TYPES.DELETE](state: IMailsState, id: string) {
    state.mails = state.mails.filter((m) => m.id !== id);
  },
};

export default mutation;
