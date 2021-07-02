<template>
  <app-card-section-header title-slug="labels" @click="showDialog" />
  <q-list dense>
    <router-link
      v-for="label in labels"
      :key="label.name"
      :to="`/labels/${label.name}`"
      v-slot="{isActive}"
      style="color:inherit;text-decoration:none;"
    >
      <app-labels-item
        :active="isActive"
        :name="label.name"
        :color="label.color"
        @edit="onEdit"
        @delete="onDelete"
      />
    </router-link>
  </q-list>
  <app-dialog-add-group
    v-if="visibleDialog"
    v-model="visibleDialog"
    :title="$t(currentEditLabelName ? 'editLabel': 'addLabel')"
    :name="currentEditLabelName"
    :options-title="$t('chooseColor')"
    :options="colors"
    :current-option="currentEditLabelColor"
    @add="onAdd"
  />
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import AppCardSectionHeader from 'src/components/AppCardSectionHeader.vue';
import AppDialogAddGroup from 'src/components/AppDialogAddGroup.vue';
import AppLabelsItem from 'src/components/AppLabelsItem.vue';
import {
  ILabel, IAddLabel, IEditLabel, IDeleteLabel,
} from 'src/types/Labels.d';
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
    AppLabelsItem,
    AppDialogAddGroup,
  },
  props: {
    labels: {
      type: Array as PropType<ILabel[]>,
      required: true,
    },
    add: {
      type: Function as PropType<IAddLabel>,
      required: true,
    },
    edit: {
      type: Function as PropType<IEditLabel>,
      required: true,
    },
    delete: {
      type: Function as PropType<IDeleteLabel>,
      required: true,
    },
  },
  setup(props) {
    const visibleDialog = ref(false);
    const currentEditLabelName = ref('');
    const currentEditLabelColor = ref('');

    const showDialog = () => {
      visibleDialog.value = true;
    };

    const onAdd = (({ oldName, newName, group }: IPayloadAddGroup) => {
      if (currentEditLabelName.value) {
        props.edit({
          oldName,
          newName,
          color: group,
        });
        currentEditLabelName.value = '';
        currentEditLabelColor.value = '';
      } else {
        props.add({
          name: newName,
          color: group,
        });
      }
    });

    const onEdit = (name: string) => {
      const currentLabel = props.labels.find((l) => l.name === name);

      if (currentLabel) {
        currentEditLabelName.value = name;
        currentEditLabelColor.value = currentLabel.color;
        showDialog();
      }
    };

    const onDelete = (name: string) => {
      props.delete(name);
    };

    return {
      visibleDialog,
      showDialog,
      onAdd,
      onEdit,
      onDelete,
      colors,
      currentEditLabelName,
      currentEditLabelColor,
    };
  },
});
</script>
