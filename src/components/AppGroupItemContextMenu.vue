<template>
  <q-menu
    touch-position
    context-menu
  >
    <q-list dense style="min-width: 100px">
      <q-item clickable v-close-popup @click="onEdit">
        <q-item-section class="context-menu-icon">
          <q-icon color="green-8" name="edit" size="16px" class="context-menu-icon" />
        </q-item-section>
        <q-item-section>Edit</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onDelete">
        <q-item-section class="context-menu-icon">
          <q-icon color="red-8" name="delete" size="16px" />
        </q-item-section>
        <q-item-section>Delete</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppGroupItemContextMenu',
  emit: {
    delete: null,
    edit: null,
  },
  setup(props, { emit }) {
    const onEdit = () => emit('edit', null);
    const onDelete = () => emit('delete', null);

    return {
      onEdit,
      onDelete,
    };
  },
});
</script>

<style scoped>
.context-menu-icon {
  max-width: 1em;
}
</style>
