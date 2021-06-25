<template>
  <q-item
    clickable
    v-ripple
  >
    <q-item-section>{{ name }}</q-item-section>
    <q-item-section avatar>
      <q-icon :color="color" name="play_circle_filled" size="xs" />
    </q-item-section>
    <app-group-item-context-menu
      @edit="onEdit"
      @delete="onDelete"
    />
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppGroupItemContextMenu from 'src/components/AppGroupItemContextMenu.vue';

export default defineComponent({
  name: 'AppLabelsItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
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
