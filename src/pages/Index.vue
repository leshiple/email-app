<template>
  <q-page class="q-px-xl q-py-lg bg-grey-2">
    <h1 class="text-h5">Email app</h1>
    <div class="row items-start q-gutter-md">
      <app-sidebar />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import AppSidebar from 'src/components/AppSidebar.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { AppSidebar },
  setup() {
    const store = useStore(storeKey);

    provide('folders', store.state.folders.folders);
    provide('labels', store.state.labels.labels);
  },
});
</script>
