<template>
  <q-card-section>
    <slot />
    <template v-if="showTools">
      <app-toolbar-labels :labels="labels" @change="(label) => $emit('change-label', label)"/>
      <app-toolbar-folders :folders="folders" @change="onChangeFolder" />
      <app-toolbar-delete @click="$emit('delete')"/>
      <app-toolbar-more @toggle-read="(read) => $emit('toggle-read', read)"/>
    </template>
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
    showTools: {
      type: Boolean,
      default: true,
    },
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
  emits: {
    'change-folder': null,
    'change-label': null,
    'toggle-starred': null,
    'toggle-read': null,
    delete: null,
  },
  setup(_props, { emit }) {
    const onChangeFolder = (folder: string) => {
      if (folder === 'starred') {
        emit('toggle-starred');
      } else {
        emit('change-folder', folder);
      }
    };

    return {
      onChangeFolder,
    };
  },
});
</script>
