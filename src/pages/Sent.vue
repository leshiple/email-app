<template>
  <app-folder :group="folderName" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import AppFolder from 'src/components/AppFolder.vue';
import { SENT_FOLDER } from 'src/constants';

export default defineComponent({
  name: 'PageSent',
  components: {
    AppFolder,
  },
  setup() {
    const store = useStore(storeKey);
    const branches = computed(() => store.getters['branches/whereLastAuthoreIsMe']); //eslint-disable-line
    return {
      branches,
      folderName: SENT_FOLDER,
    };
  },
});
</script>
