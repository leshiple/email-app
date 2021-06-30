<template>
  <app-card-section-header title-slug="folders" @click="showDialog" />
  <q-list dense class="q-mb-lg">
    <router-link
      v-for="folder in folders"
      :key="folder.slug"
      :to="`/${folder.slug}`"
       v-slot="{isActive}"
      style="color:inherit;text-decoration:none;"
    >
      <app-folders-item
        :active="isActive"
        :slug="folder.slug"
        :icon="folder.icon"
        :type="folder.type"
        @edit="onEdit"
        @delete="onDelete"
      />
    </router-link>
  </q-list>
  <app-dialog-add-group
    v-if="visibleDialog"
    v-model="visibleDialog"
    :title="$t(currentEditFolder ? 'editFolder' : 'addFolder')"
    :name="currentEditFolder"
    :name-validator="existFolder"
    @add="onAdd"
  />
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import AppCardSectionHeader from 'src/components/AppCardSectionHeader.vue';
import AppFoldersItem from 'src/components/AppFoldersItem.vue';
import AppDialogAddGroup from 'src/components/AppDialogAddGroup.vue';
import useValidations from 'src/composables/useValidionRules';
import {
  IFolder, IAddFolder, IEditFolder, IDeleteFolder,
} from 'src/types/Folders.d';
import { IPayloadAddGroup } from 'src/types/common.d';

export default defineComponent({
  name: 'AppFolders',
  props: {
    folders: {
      type: Array as PropType<IFolder[]>,
      required: true,
    },
    add: {
      type: Function as PropType<IAddFolder>,
      required: true,
    },
    edit: {
      type: Function as PropType<IEditFolder>,
      required: true,
    },
    delete: {
      type: Function as PropType<IDeleteFolder>,
      required: true,
    },
  },
  components: {
    AppCardSectionHeader,
    AppDialogAddGroup,
    AppFoldersItem,
  },
  setup(props) {
    const visibleDialog = ref(false);
    const currentEditFolder = ref('');
    const { existFolder } = useValidations();

    const showDialog = () => {
      visibleDialog.value = true;
    };

    const onAdd = (({ oldName, newName }: IPayloadAddGroup) => {
      if (currentEditFolder.value) {
        props.edit({
          oldName,
          newName,
        });
        currentEditFolder.value = '';
      } else {
        props.add(newName);
      }
    });

    const onEdit = (name: string) => {
      currentEditFolder.value = name;
      showDialog();
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
      existFolder,
      currentEditFolder,
    };
  },
});
</script>
