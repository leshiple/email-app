<template>
  <div class="q-mx-md row items-center justify-start">
    <div class="text-subtitle1 text-weight-bold">{{$t(titleSlug)}}</div>
    <q-btn flat round color="grey-6" icon="add" size="10px" class="q-ml-xs" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCardSectionHeader',
  props: {
    titleSlug: {
      type: String,
      required: true,
    },
  },
  emits: {
    click: null,
  },
});
</script>
