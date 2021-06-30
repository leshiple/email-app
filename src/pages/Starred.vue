<template>
  <app-folder folder="starred" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppFolder from 'src/components/AppFolder.vue';

export default defineComponent({
  name: 'PageStared',
  components: {
    AppFolder,
  },
  setup() {
    const branches = inject('starredBranches');
    return {
      branches,
    };
  },
});
</script>
