<template>
  <app-folder :folder="folder" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppFolder from 'src/components/AppFolder.vue';
import { IBranch } from 'src/types/Branches.d';

type F = (folderName: string) => IBranch[] //eslint-disable-line

export default defineComponent({
  name: 'PageFolder',
  components: {
    AppFolder,
  },
  setup() {
    const route = useRoute();
    const folder = computed(() => route.params.folder.toString());
    const branches = computed(() => {
      const branchesByFolder = inject('branchesByFolder') as F;
      return branchesByFolder(folder.value);
    });

    return {
      folder,
      branches,
    };
  },
});
</script>
