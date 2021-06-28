<template>
  <app-toolbar :folders="folders" :labels="labels">
    <app-toolbar-check />
  </app-toolbar>
  <q-separator inset class="q-mb-md" />
  <app-branch-list :branches="branches" />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppToolbarCheck from 'src/components/AppToolbarCheck.vue';
import AppBranchList from 'src/components/AppBranchList.vue';

export default defineComponent({
  name: 'PageBranches',
  components: {
    AppToolbar,
    AppToolbarCheck,
    AppBranchList,
  },
  setup() {
    const folders = inject('folders');
    const labels = inject('labels');
    const branches = inject('branches');

    return {
      folders,
      labels,
      branches,
    };
  },
});
</script>
