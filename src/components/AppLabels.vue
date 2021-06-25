<template>
  <app-card-section-header title-slug="labels" @click="showDialog" />
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
  <app-dialog-add-group
    v-model="visibleDialog"
    :title="$t('addLabel')"
    :options-title="$t('chooseColor')"
    :options="colors"
    @add="onAdd"
  />
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import AppCardSectionHeader from 'src/components/AppCardSectionHeader.vue';
import AppDialogAddGroup from 'src/components/AppDialogAddGroup.vue';
import { ILabel } from 'src/types/Labels.d';
import { IPayloadAddGroup } from 'src/types/common.d';

const colors = [
  {
    name: 'pink',
    value: 'pink-4',
  },
  {
    name: 'yellow',
    value: 'yellow-4',
  },
  {
    name: 'blue',
    value: 'blue-4',
  },
  {
    name: 'orange',
    value: 'orange-4',
  },
  {
    name: 'brown',
    value: 'brown-4',
  },
  {
    name: 'green',
    value: 'green-4',
  },
  {
    name: 'red',
    value: 'red-4',
  },
  {
    name: 'purple',
    value: 'purple-4',
  },
  {
    name: 'teal',
    value: 'teal-4',
  },
];

export default defineComponent({
  name: 'AppLabels',
  components: {
    AppCardSectionHeader,
    AppDialogAddGroup,
  },
  props: {
    labels: {
      type: Array as PropType<ILabel[]>,
      required: true,
    },
  },
  setup() {
    const visibleDialog = ref(false);

    const showDialog = () => {
      visibleDialog.value = true;
    };

    const onAdd = (({ name, group }: IPayloadAddGroup) => {
      console.log(name, group);
    });

    return {
      visibleDialog,
      showDialog,
      onAdd,
      colors,
    };
  },
});
</script>
