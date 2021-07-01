import { MutationTree } from 'vuex';
import {
  IBranch, IPayloadSetFolder, IPayloadToggleStarred, IPayloadToggleLabelFromBranches,
} from 'src/types/Branches.d';
import { IBranchState } from './state';

export const TYPES = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  SET_FOLDER: 'SET_FOLDER',
  TOGGLE_STARRED: 'TOGGLE_STARRED',
  ADD_LABEL: 'ADD_LABEL',
  DELETE_LABEL: 'DELETE_LABEL',
};

const mutation: MutationTree<IBranchState> = {
  [TYPES.ADD](state: IBranchState, branch: IBranch) {
    state.branches.push(branch);
  },
  [TYPES.DELETE](state: IBranchState, ids: string) {
    state.branches = state.branches.filter((branch) => !ids.includes(branch.id));
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
  [TYPES.ADD_LABEL](state: IBranchState, { branchesIds, label }: IPayloadToggleLabelFromBranches) {
    state.branches.forEach((branch) => {
      const isSuitable = branchesIds.includes(branch.id);
      if (isSuitable) {
        const notHasLabel = !branch.labels.includes(label);
        if (notHasLabel) {
          branch.labels.push(label);
        }
      }
    });
  },
  [TYPES.DELETE_LABEL](state: IBranchState, { branchesIds, label }
    : IPayloadToggleLabelFromBranches) {
    state.branches.forEach((branch) => {
      const isSuitable = branchesIds.includes(branch.id);
      if (isSuitable) {
        branch.labels = branch.labels.filter((labelName) => (labelName !== label));
      }
    });
  },
};

export default mutation;
