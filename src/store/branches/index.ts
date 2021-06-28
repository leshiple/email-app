import { Module } from 'vuex';
import { IRootState } from '../index';
import state, { IBranchState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const module: Module<IBranchState, IRootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default module;
