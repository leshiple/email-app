import { ActionTree } from 'vuex';
import { IPayloadAddMail } from 'src/types/Mails.d';
import { IRootState } from '../index';
import { IMailsState } from './state';
import { TYPES } from './mutations';

const actions: ActionTree<IMailsState, IRootState> = {
  async add({ commit, dispatch }, mail: IPayloadAddMail) {
    const branch = mail.branch ?? Date.now().toString();
    const date = Date.now();
    const author = 'me';

    if (!mail.branch) {
      await dispatch('branches/add', {
        id: branch,
        lastMessageAuthor: author,
        subject: mail.subject,
        count: 1,
        date,
        starred: false,
        read: true,
        labels: [],
      }, { root: true });
    }

    commit(TYPES.ADD, {
      id: `mail-${Date.now()}`,
      date,
      author,
      branch,
      text: mail.text,
    });
  },
  delete({ commit }, id: string) {
    commit(TYPES.DELETE, id);
  },
};

export default actions;
