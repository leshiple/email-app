<template>
  <q-item
    clickable
    v-ripple
  >
    <q-item-section avatar>
      <q-icon color="grey-8" :name="icon" />
    </q-item-section>
    <q-item-section>{{$t(slug)}}</q-item-section>
    <app-group-item-context-menu
      v-if="type !== 'system'"
      @edit="onEdit"
      @delete="onDelete"
    />
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppGroupItemContextMenu from 'src/components/AppGroupItemContextMenu.vue';
import { IFolderType } from 'src/types/Folders.d';

export default defineComponent({
  name: 'AppFoldersItem.vue',
  props: {
    icon: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<IFolderType>,
      required: true,
    },
  },
  components: {
    AppGroupItemContextMenu,
  },
  emit: {
    edit: null,
    delete: null,
  },
  setup(props, { emit }) {
    const onEdit = () => emit('edit', props.slug);
    const onDelete = () => emit('delete', props.slug);

    return {
      onEdit,
      onDelete,
    };
  },
});
</script>
