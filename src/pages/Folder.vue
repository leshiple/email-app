<template>
  <app-folder :parent="folder" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppFolder from 'src/components/AppFolder.vue';
import { IGetBranchesByFolder } from 'src/types/Branches.d';

export default defineComponent({
  name: 'PageFolder',
  components: {
    AppFolder,
  },
  setup() {
    const route = useRoute();
    const folder = computed(() => route.params.folder.toString());
    const branchesByFolder = inject('branchesByFolder') as IGetBranchesByFolder;
    const branches = computed(() => branchesByFolder(folder.value));

    return {
      folder,
      branches,
    };
  },
});
</script>
