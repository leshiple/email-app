<template>
  <app-folder :group="folderName" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppFolder from 'src/components/AppFolder.vue';
import { STARRED } from 'src/constants';

export default defineComponent({
  name: 'PageStared',
  components: {
    AppFolder,
  },
  setup() {
    const branches = inject('starredBranches');
    return {
      branches,
      folderName: STARRED,
    };
  },
});
</script>
