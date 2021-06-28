import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';
import folders from './folders';
import { IFoldersState } from './folders/state';
import labels from './labels';
import { ILabesState } from './labels/state';
import branches from './branches';
import { IBranchState } from './branches/state';

export interface IRootState {
  folders: IFoldersState
  labels: ILabesState
  branches: IBranchState
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<IRootState>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<IRootState>> = Symbol('vuex-key');

export default store((/* { ssrContext } */) => {
  const Store = createStore<IRootState>({
    modules: {
      folders,
      labels,
      branches,
    },
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
