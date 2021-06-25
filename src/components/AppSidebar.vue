<template>
  <q-card style="width: 230px" class="q-pb-md">
    <app-compose />
    <app-folders :folders="folders" :add="addFolder" :edit="editFolder" :delete="deleteFolder" />
    <q-separator inset class="q-mb-md" />
    <app-labels :labels="labels" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppCompose from 'src/components/AppCompose.vue';
import AppFolders from 'src/components/AppFolders.vue';
import AppLabels from 'src/components/AppLabels.vue';

export default defineComponent({
  name: 'AppSidebar',
  components: { AppCompose, AppFolders, AppLabels },
  setup() {
    const folders = inject('folders');
    const addFolder = inject('addFolder');
    const editFolder = inject('editFolder');
    const deleteFolder = inject('deleteFolder');
    const labels = inject('labels');

    return {
      folders,
      labels,
      addFolder,
      editFolder,
      deleteFolder,
    };
  },
});
</script>
