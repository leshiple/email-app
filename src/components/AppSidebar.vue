<template>
  <q-card style="width: 230px" class="q-pb-md">
    <app-compose />
    <app-folders :folders="folders" :add="addFolder" :edit="editFolder" :delete="deleteFolder" />
    <q-separator inset class="q-mb-md" />
    <app-labels :labels="labels" :add="addLabel" :edit="editLabel" :delete="deleteLabel" />
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
    const addLabel = inject('addLabel');
    const editLabel = inject('editLabel');
    const deleteLabel = inject('deleteLabel');

    return {
      folders,
      addFolder,
      editFolder,
      deleteFolder,
      labels,
      addLabel,
      editLabel,
      deleteLabel,
    };
  },
});
</script>
