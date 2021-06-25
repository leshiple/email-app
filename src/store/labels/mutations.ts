import { MutationTree } from 'vuex';
import { ILabel } from 'src/types/Labels.d';
import { ILabesState } from './state';

export const TYPES = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

const mutation: MutationTree<ILabesState> = {
  [TYPES.ADD](state: ILabesState, label: ILabel) {
    state.labels.push(label);
  },
};

export default mutation;
