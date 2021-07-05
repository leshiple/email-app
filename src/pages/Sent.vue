<template>
  <app-folder group="sent" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import AppFolder from 'src/components/AppFolder.vue';

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
    };
  },
});
</script>
