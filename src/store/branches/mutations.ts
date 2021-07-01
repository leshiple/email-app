import { MutationTree } from 'vuex';
import { IBranch, IPayloadSetFolder, IPayloadToggleStarred } from 'src/types/Branches.d';
import { IBranchState } from './state';

export const TYPES = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  SET_FOLDER: 'SET_FOLDER',
  TOGGLE_STARRED: 'TOGGLE_STARRED',
};

const mutation: MutationTree<IBranchState> = {
  [TYPES.ADD](state: IBranchState, branch: IBranch) {
    state.branches.push(branch);
  },
  [TYPES.DELETE](state: IBranchState, id: string) {
    state.branches = state.branches.filter((b) => b.id !== id);
  },
  [TYPES.SET_FOLDER](state: IBranchState, { branchesIds, folderName }: IPayloadSetFolder) {
    state.branches.forEach((branch) => {
      const isSuitable = branchesIds.includes(branch.id);

      if (isSuitable) {
        branch.folder = folderName;
      }
    });
  },
  [TYPES.TOGGLE_STARRED](state: IBranchState, { branchesIds, status }: IPayloadToggleStarred) {
    state.branches.forEach((branch) => {
      const isSuitable = branchesIds.includes(branch.id);

      if (isSuitable) {
        branch.starred = status;
      }
    });
  },
};

export default mutation;
