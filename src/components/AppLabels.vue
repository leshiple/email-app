<template>
  <app-card-section-header title-slug="labels" />
  <q-list dense>
    <q-item
      v-for="label in labels"
      :key="label.name"
      clickable
      v-ripple
    >
      <q-item-section>{{ label.name }}</q-item-section>
      <q-item-section avatar>
        <q-icon :color="label.color" name="play_circle_filled" size="xs" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppCardSectionHeader from 'src/components/AppCardSectionHeader.vue';
import { ILabel } from 'src/types/Labels.d';

export default defineComponent({
  name: 'AppLabels',
  components: {
    AppCardSectionHeader,
  },
  props: {
    labels: {
      type: Array as PropType<ILabel[]>,
      required: true,
    },
  },
});
</script>
