<template>
  <q-page class="q-px-xl q-py-lg bg-grey-2">
    <h1 class="text-h5">Email app</h1>
    <div class="row items-start q-gutter-md">
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

export default defineComponent({
  name: 'PageIndex',
  components: { AppSidebar },
  setup() {
    const store = useStore(storeKey);

    const folders = computed(() => store.state.folders.folders);
    const labels = computed(() => store.state.labels.labels);
    const branches = computed(() => store.state.branches.branches);

    provide('folders', folders);
    provide('addFolder', (name: string) => store.dispatch('folders/add', name));
    provide('editFolder', (payload: IPayloadEditFolder) => store.dispatch('folders/edit', payload));
    provide('deleteFolder', (name: string) => store.dispatch('folders/delete', name));

    provide('labels', labels);
    provide('addLabel', (label: ILabel) => store.dispatch('labels/add', label));
    provide('editLabel', (payload: IPayloadEditLabel) => store.dispatch('labels/edit', payload));
    provide('deleteLabel', (name: string) => store.dispatch('labels/delete', name));

    provide('branches', branches);
  },
});
</script>
