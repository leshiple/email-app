<template>
  <app-card-section-header title-slug="folders" @click="showDialog" />
  <q-list dense class="q-mb-lg">
    <q-item
      v-for="folder in folders"
      :key="folder.slug"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon color="grey-8" :name="folder.icon" />
      </q-item-section>
      <q-item-section>{{$t(folder.slug)}}</q-item-section>
    </q-item>
  </q-list>
  <app-dialog-add-group
    v-model="visibleDialog"
    :title="$t('addFolder')"
    :name-validator="existFolder"
    @add="onAdd"
  />
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import AppCardSectionHeader from 'src/components/AppCardSectionHeader.vue';
import AppDialogAddGroup from 'src/components/AppDialogAddGroup.vue';
import useValidations from 'src/composables/useValidionRules';
import { IFolder, IAddFolder } from 'src/types/Folders.d';
import { IPayloadGroup } from 'src/type/Common';

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
  },
  components: {
    AppCardSectionHeader,
    AppDialogAddGroup,
  },
  setup(props) {
    const visibleDialog = ref(false);
    const { existFolder } = useValidations();

    const showDialog = () => {
      visibleDialog.value = true;
    };

    const onAdd = (({ name }: IPayloadGroup) => {
      props.add(name);
    });

    return {
      visibleDialog,
      showDialog,
      onAdd,
      existFolder,
    };
  },
});
</script>
