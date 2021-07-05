<template>
  <q-card style="width: 230px;flex-shrink:0" class="q-pb-md">
    <app-compose :current-branch="currentBranch" />
    <app-folders :folders="folders" :add="addFolder" :edit="editFolder" :delete="onDeleteFolder" />
    <q-separator inset class="q-mb-md" />
    <app-labels :labels="labels" :add="addLabel" :edit="editLabel" :delete="deleteLabel" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useRouter } from 'vue-router';
import AppCompose from 'src/components/AppCompose.vue';
import AppFolders from 'src/components/AppFolders.vue';
import AppLabels from 'src/components/AppLabels.vue';
import { IDeleteFolder } from 'src/types/Folders.d';

export default defineComponent({
  name: 'AppSidebar',
  components: { AppCompose, AppFolders, AppLabels },
  setup() {
    const router = useRouter();
    const folders = inject('folders');
    const addFolder = inject('addFolder');
    const editFolder = inject('editFolder');
    const deleteFolder = inject('deleteFolder') as IDeleteFolder;
    const labels = inject('labels');
    const addLabel = inject('addLabel');
    const editLabel = inject('editLabel');
    const deleteLabel = inject('deleteLabel');
    const currentBranch = inject('currentBranch');

    const onDeleteFolder = async (folder: string) => {
      deleteFolder(folder);
      await router.push({ path: '/inbox' });
    };

    return {
      folders,
      addFolder,
      editFolder,
      onDeleteFolder,
      labels,
      addLabel,
      editLabel,
      deleteLabel,
      currentBranch,
    };
  },
});
</script>
