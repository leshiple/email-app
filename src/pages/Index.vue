<template>
  <q-page class="q-px-xl q-py-lg bg-grey-2">
    <h1 class="text-h5">Email app</h1>
    <div class="row items-start q-gutter-md no-wrap">
      <app-sidebar />
      <q-card style="flex-grow: 1">
        <router-view />
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import AppSidebar from 'src/components/AppSidebar.vue';
import { IPayloadEditFolder } from 'src/types/Folders.d';
import { ILabel, IPayloadEditLabel } from 'src/types/Labels.d';
import {
  IPayloadSetFolder, IPayloadToggleStarred, IPayloadToggleLabelFromBranches, IPayloadToggleRead,
} from 'src/types/Branches.d';
import { IPayloadAddMail } from 'src/types/Mails.d';

export default defineComponent({
  name: 'PageIndex',
  components: { AppSidebar },
  setup() {
    const store = useStore(storeKey);

    const folders = computed(() => store.state.folders.folders);
    const labels = computed(() => store.state.labels.labels);

    provide('folders', folders);
    provide('addFolder', (name: string) => store.dispatch('folders/add', name));
    provide('editFolder', (payload: IPayloadEditFolder) => store.dispatch('folders/edit', payload));
    provide('deleteFolder', (name: string) => store.dispatch('folders/delete', name));

    provide('labels', labels);
    provide('addLabel', (label: ILabel) => store.dispatch('labels/add', label));
    provide('editLabel', (payload: IPayloadEditLabel) => store.dispatch('labels/edit', payload));
    provide('deleteLabel', (name: string) => store.dispatch('labels/delete', name));

    provide('setFolderBranches', (payload: IPayloadSetFolder) => store.dispatch('branches/setFolder', payload));
    provide('toggleStarredBranches', (payload: IPayloadToggleStarred) => store.dispatch('branches/toggleStarred', payload));
    provide('deleteBranches', (ids: string[]) => store.dispatch('branches/delete', ids));
    provide('addLabelToBranches', (payload: IPayloadToggleLabelFromBranches) => store.dispatch('branches/addLabel', payload));
    provide('deleteLabelFromBranches', (payload: IPayloadToggleLabelFromBranches) => store.dispatch('branches/deleteLabel', payload));
    provide('starredBranches', computed(() => store.getters['branches/starred'])); //eslint-disable-line
    provide('toggleReadBranches', (payload: IPayloadToggleRead) => store.dispatch('branches/toggleRead', payload));
    provide('branchesByFolder', store.getters['branches/byFolder']); //eslint-disable-line
    provide('branchesByLabel', store.getters['branches/byLabel']); //eslint-disable-line
    provide('branchById', store.getters['branches/byId']); //eslint-disable-line
    provide('currentBranch', computed(() => store.getters['branches/currentBranch'])); //eslint-disable-line

    provide('addMail', (mail: IPayloadAddMail) => store.dispatch('mails/add', mail));
  },
});
</script>
