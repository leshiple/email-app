<template>
  <q-btn unelevated color="secondary" icon="chevron_left" class="q-mr-sm" @click="$router.back()" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppGoBack',
});
</script>
