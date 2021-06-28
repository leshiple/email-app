<template>
  <app-toolbar :folders="folders" :labels="labels">
    <app-go-back />
  </app-toolbar>
  <q-separator inset class="q-mb-md" />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppGoBack from 'src/components/AppGoBack.vue';

export default defineComponent({
  name: 'PageBranch',
  components: {
    AppToolbar,
    AppGoBack,
  },
  setup() {
    const folders = inject('folders');
    const labels = inject('labels');

    return {
      folders,
      labels,
    };
  },
});
</script>
