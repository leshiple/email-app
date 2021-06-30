import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { ILabesState } from './state';

const getters: GetterTree<ILabesState, IRootState> = {
  byName(state) {
    return (name: string) => state.labels.find((label) => label.name === name);
  },
};

export default getters;
