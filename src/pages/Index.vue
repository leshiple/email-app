<template>
  <q-page class="q-px-xl q-py-lg bg-grey-2">
    <h1 class="text-h5">Email app</h1>
    <div class="row items-start q-gutter-md">
      <app-sidebar />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppSidebar from 'src/components/AppSidebar.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { AppSidebar },
});
</script>
