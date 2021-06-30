import { IBranch, IBranchWithLabels } from 'src/types/Branches';
import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { IBranchState } from './state';

export type IGetBranchesByFolder = (folder: string) => IBranch[] // eslint-disable-line

const getters: GetterTree<IBranchState, IRootState> = {
  starred(state, _childGetters, _rootState, rootGetters) {
    return state.branches.reduce((acc: IBranchWithLabels[], branch: IBranch) => {
      if (branch.starred) {
        acc.push({
          ...branch,
          labels: branch.labels.map((label) => rootGetters['labels/byName'](label)), // eslint-disable-line
        });
      }
      return acc;
    }, []);
  },
  byId(state, _childGetters, _rootState, rootGetters) {
    return (id: string) => {
      const currentBranch = state.branches.find((branch) => branch.id === id);
      if (currentBranch) {
        return {
          ...currentBranch,
          labels: currentBranch.labels.map((label) => rootGetters['labels/byName'](label)), // eslint-disable-line
          mails: rootGetters['mails/byBranch'](currentBranch.id), // eslint-disable-line
        };
      }
      return currentBranch;
    };
  },
  byFolder(state, _childGetters, _rootState, rootGetters) {
    return (folder: string) => (
      state.branches.reduce((acc: IBranchWithLabels[], branch: IBranch) => {
        if (branch.folder === folder) {
          acc.push({
            ...branch,
          labels: branch.labels.map((label) => rootGetters['labels/byName'](label)), // eslint-disable-line
          });
        }
        return acc;
      }, []));
  },
};

export default getters;
