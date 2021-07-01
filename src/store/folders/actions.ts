import { ActionTree } from 'vuex';
import { DEFAUL_FOLDER_ICON } from 'src/constants';
import { IPayloadEditFolder } from 'src/types/Folders';
import { IBranchWithLabels } from 'src/types/Branches.d';
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
  async delete({ commit, dispatch, rootGetters }, folderName: string) {
    const branches: IBranchWithLabels[] = rootGetters['branches/byFolder'](folderName); //eslint-disable-line
    const branchesIds: string[] = branches.map((branch:IBranchWithLabels) => (branch.id));
    commit(TYPES.DELETE, folderName);

    await dispatch('branches/setFolder', {
      branchesIds,
      folderName: 'trash',
    }, {
      root: true,
    });
  },
};

export default actions;
