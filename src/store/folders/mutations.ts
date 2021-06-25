import { MutationTree } from 'vuex';
import { IFolder, IPayloadEditFolder } from 'src/types/Folders';
import { IFoldersState } from './state';

export const TYPES = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

const mutation: MutationTree<IFoldersState> = {
  [TYPES.ADD](state: IFoldersState, folder: IFolder) {
    state.folders = [...state.folders.slice(0, -1), folder, state.folders.slice(-1)[0]];
  },
  [TYPES.EDIT](state: IFoldersState, { oldName, newName }: IPayloadEditFolder) {
    state.folders = state.folders.map((folder) => {
      const isCurrentFolder = folder.slug === oldName;

      if (isCurrentFolder) {
        return {
          ...folder,
          slug: newName,
        };
      }

      return folder;
    });
  },
  [TYPES.DELETE](state: IFoldersState, folderName: string) {
    state.folders = state.folders.filter((f) => f.slug !== folderName);
  },
};

export default mutation;
