<template>
  <q-btn-dropdown unelevated color="secondary" icon="folder" class="q-mr-sm">
    <q-list dense style="min-width: 130px">
      <app-folders-item
        v-for="folder in folders"
        :key="folder.slug"
        :slug="folder.slug"
        :icon="folder.icon"
        :type="folder.type"
        :enable-context="false"
        @click="$emit('change', folder.slug)"
      />
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppFoldersItem from 'src/components/AppFoldersItem.vue';
import { IFolder } from 'src/types/Folders.d';

export default defineComponent({
  name: 'AppToolbarFolders',
  props: {
    folders: {
      type: Array as PropType<IFolder[]>,
      required: true,
    },
  },
  emits: {
    change: null,
  },
  components: {
    AppFoldersItem,
  },
});
</script>
