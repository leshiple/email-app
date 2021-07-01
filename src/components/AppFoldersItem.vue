<template>
  <q-item
    clickable
    v-ripple
    v-close-popup
    class="folders-item text-grey-8"
    :active="active"
    active-class="bg-grey-2"
  >
    <q-item-section avatar>
      <q-icon :name="icon" size="xs" />
    </q-item-section>
    <q-item-section>{{$t(slug)}}</q-item-section>
    <app-group-item-context-menu
      v-if="type !== 'system' && enableContext"
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
    active: {
      type: Boolean,
      default: false,
    },
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
    enableContext: {
      type: Boolean,
      default: true,
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

<style scoped>
 .folders-item .q-item__section--avatar {
   min-width: 1em;
 }
</style>
