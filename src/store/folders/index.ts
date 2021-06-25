import { Module } from 'vuex';
import { IRootState } from '../index';
import state, { IFoldersState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const module: Module<IFoldersState, IRootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default module;
