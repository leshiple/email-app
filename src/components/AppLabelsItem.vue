<template>
  <q-item
    clickable
    v-ripple
    v-close-popup
    class="text-grey-8"
  >
    <q-item-section>{{ name }}</q-item-section>
    <q-item-section avatar>
      <q-icon :color="color" name="play_circle_filled" size="xs" />
    </q-item-section>
    <app-group-item-context-menu
      v-if="enableContext"
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
    enableContext: {
      type: Boolean,
      defalut: true,
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
    const onEdit = () => emit('edit', props.name);
    const onDelete = () => emit('delete', props.name);

    return {
      onEdit,
      onDelete,
    };
  },
});
</script>
