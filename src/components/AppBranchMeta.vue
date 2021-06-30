<template>
  <q-card-section>
    <div class="q-mb-md">
      <span class="q-mr-lg text-grey-7">{{$t('subject')}}:</span>
      <span>{{subject}}</span>
    </div>
    <div v-if="labels.length" class="flex items-center">
      <div class="q-mr-lg text-grey-7">{{$t('labels')}}:</div>
      <q-chip
        v-for="label in labels"
        :key="label.name"
        size="sm"
        :color="label.color"
      >
        {{label.name}}
      </q-chip>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ILabel } from 'src/types/Labels.d';

export default defineComponent({
  name: 'AppBranchMeta',
  props: {
    subject: {
      type: String,
      required: true,
    },
    labels: {
      type: Array as PropType<ILabel[]>,
      default: () => [],
    },
  },
});
</script>
