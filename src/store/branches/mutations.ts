import { MutationTree } from 'vuex';
import { IBranch } from 'src/types/Branches.d';
import { IBranchState } from './state';

export const TYPES = {
  ADD: 'ADD',
  DELETE: 'DELETE',
};

const mutation: MutationTree<IBranchState> = {
  [TYPES.ADD](state: IBranchState, branch: IBranch) {
    state.branches.push(branch);
  },
  [TYPES.DELETE](state: IBranchState, id: string) {
    state.branches = state.branches.filter((b) => b.id !== id);
  },
};

export default mutation;
