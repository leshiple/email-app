import { MutationTree } from 'vuex';
import { IFolder } from 'src/types/Folders';
import { IFoldersState } from './state';

export const TYPES = {
  ADD: 'ADD',
};

const mutation: MutationTree<IFoldersState> = {
  [TYPES.ADD](state, folder: IFolder) {
    // const lastElement = state.folders.slice(-1)[0];
    state.folders = [...state.folders.slice(0, -1), folder, state.folders.slice(-1)[0]];

    // state.folders.push(folder);
    // state.folders.splice(0, -1);
    // state.folders.push(folder);
    // state.folders.push()
  },
};

export default mutation;
