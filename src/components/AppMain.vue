<template>
  <q-card style="flex-grow: 1">
    <app-toolbar :folders="folders" :labels="labels"/>
    <q-separator inset class="q-mb-md" />
    <app-branch-list :branches="branches" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppBranchList from 'src/components/AppBranchList.vue';

export default defineComponent({
  name: 'AppMain',
  components: {
    AppToolbar,
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
