import { MutationTree } from 'vuex';
import { ILabel, IPayloadEditLabel } from 'src/types/Labels.d';
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
  [TYPES.EDIT](state: ILabesState, { oldName, newName, color }: IPayloadEditLabel) {
    state.labels = state.labels.map((label) => {
      const isCurrentLabel = label.name === oldName;

      if (isCurrentLabel) {
        return {
          ...label,
          name: newName,
          color,
        };
      }

      return label;
    });
  },
  [TYPES.DELETE](state: ILabesState, name: string) {
    state.labels = state.labels.filter((l) => l.name !== name);
  },
};

export default mutation;
