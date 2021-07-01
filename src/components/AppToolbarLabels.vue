<template>
  <q-btn-dropdown unelevated color="secondary" icon="label" class="q-mr-sm">
    <q-list dense style="min-width: 130px">
      <app-labels-item
        v-for="label in labels"
        :key="label.name"
        :name="label.name"
        :color="label.color"
        :enable-context="true"
        @click="$emit('change', label.name)"
      />
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppLabelsItem from 'src/components/AppLabelsItem.vue';
import { ILabel } from 'src/types/Labels.d';

export default defineComponent({
  name: 'AppToolbarLabels',
  props: {
    labels: {
      type: Array as PropType<ILabel[]>,
      required: true,
    },
  },
  emits: {
    change: null,
  },
  components: {
    AppLabelsItem,
  },
});
</script>
