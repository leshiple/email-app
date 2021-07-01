<template>
    <q-item
      class="branch-list-item"
      :class="{
        'bg-grey-2': isActive,
        'text-bold': !read,
      }"
      clickable
    >
      <q-item-section side class="q-pr-none q-mr-sm">
        <q-checkbox v-model="checked" :val="id" />
      </q-item-section>

      <q-item-section side class="q-mr-lg">
        <q-icon
          :color="starred ? 'yellow-4': 'grey-8'"
          :name="starred ? 'star' : 'star_border'"
        />
      </q-item-section>

      <q-item-section side style="width:100px">
        <q-chip
          v-for="label in labels"
          :key="label.name"
          size="xs"
          :color="label.color"
          style="width: 100%"
        >
          {{label.name}}
        </q-chip>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ authorName }} ({{count}})</q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ subject }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-item-label class="text-dark">{{ date }}</q-item-label>
      </q-item-section>
    </q-item>
</template>

<script lang="ts">
import {
  defineComponent, computed, PropType,
} from 'vue';
import useAuthorName from 'src/composables/useAuthorName';
import { ILabel } from 'src/types/Labels';

export default defineComponent({
  name: 'AppBranchListItem',
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    lastMessageAuthor: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    labels: {
      type: Array as PropType<ILabel[]>,
      default: () => [],
    },
    starred: {
      type: Boolean,
      default: false,
    },
    read: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, { emit }) {
    const checked = computed({
      get():string[] {
        return props.modelValue;
      },
      set(newValue: string[]): void {
        emit('update:modelValue', newValue);
      },
    });

    const authorName = useAuthorName(props.lastMessageAuthor);

    const isActive = computed(() => props.modelValue.indexOf(props.id) !== -1);

    return {
      authorName,
      checked,
      isActive,
    };
  },
});
</script>
