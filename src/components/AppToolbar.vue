<template>
  <q-card-section>
    <slot />
    <app-toolbar-labels :labels="labels" />
    <app-toolbar-folders :folders="folders" />
    <app-toolbar-delete />
    <app-toolbar-more />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppToolbarFolders from 'src/components/AppToolbarFolders.vue';
import AppToolbarLabels from 'src/components/AppToolbarLabels.vue';
import AppToolbarDelete from 'src/components/AppToolbarDelete.vue';
import AppToolbarMore from 'src/components/AppToolbarMore.vue';
import { IFolder } from 'src/types/Folders.d';
import { ILabel } from 'src/types/Labels.d';

export default defineComponent({
  name: 'AppToolbar',
  props: {
    folders: {
      type: Array as PropType<IFolder[]>,
      required: true,
    },
    labels: {
      type: Array as PropType<ILabel[]>,
      required: true,
    },
  },
  components: {
    AppToolbarFolders,
    AppToolbarLabels,
    AppToolbarDelete,
    AppToolbarMore,
  },
});
</script>
