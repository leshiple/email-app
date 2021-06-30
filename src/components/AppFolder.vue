<template>
  <app-toolbar :folders="folders" :labels="labels">
    <app-toolbar-check />
  </app-toolbar>
  <q-separator inset class="q-mb-md" />
  <app-branch-list :current-folder="currentFolder" :branches="branches" />
</template>

<script lang="ts">
import {
  defineComponent, inject, PropType,
} from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppToolbarCheck from 'src/components/AppToolbarCheck.vue';
import AppBranchList from 'src/components/AppBranchList.vue';
import { IBranch } from 'src/types/Branches.d';

export default defineComponent({
  name: 'AppFolder',
  components: {
    AppToolbar,
    AppToolbarCheck,
    AppBranchList,
  },
  props: {
    folder: {
      type: String,
      required: true,
    },
    branches: {
      type: Array as PropType<IBranch[]>,
      default: () => [],
    },
  },
  setup(props) {
    const folders = inject('folders');
    const labels = inject('labels');

    return {
      currentFolder: props.folder,
      folders,
      labels,
    };
  },
});
</script>
