import { ActionTree } from 'vuex';
import { DEFAUL_FOLDER_ICON } from 'src/constants';
import { IPayloadEditFolder } from 'src/types/Folders';
import { IRootState } from '../index';
import { IFoldersState } from './state';
import { TYPES } from './mutations';

const actions: ActionTree<IFoldersState, IRootState> = {
  add({ commit }, folderName: string) {
    commit(TYPES.ADD, {
      icon: DEFAUL_FOLDER_ICON,
      slug: folderName,
      type: 'custom',
    });
  },
  edit({ commit }, payload: IPayloadEditFolder) {
    commit(TYPES.EDIT, payload);
  },
  delete({ commit }, folderName: string) {
    commit(TYPES.DELETE, folderName);
  },
};

export default actions;
