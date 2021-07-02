<template>
  <q-list>
    <router-link
      v-for="branch in branches"
      :key="branch.id"
      :to="`/${parent}/${branch.id}`"
      style="color:inherit;text-decoration:none;"
    >
      <app-branch-list-item
        v-model="checked"
        :id="branch.id"
        :last-message-author="branch.lastMessageAuthor"
        :subject="branch.subject"
        :count="branch.count"
        :date="branch.date"
        :labels="branch.labels"
        :starred="branch.starred"
        :read="branch.read"
        @toggle-check="(data) => $emit('toggle-check-item', data)"
      />
    </router-link>
  </q-list>
</template>

<script lang="ts">
import {
  defineComponent, computed, PropType,
} from 'vue';
import AppBranchListItem from 'src/components/AppBranchListItem.vue';
import { IBranch } from 'src/types/Branches.d';

export default defineComponent({
  name: 'AppBranchList',
  components: {
    AppBranchListItem,
  },
  props: {
    selected: {
      type: Array as PropType<string[]>,
      required: true,
    },
    parent: {
      type: String,
      required: true,
    },
    branches: {
      type: Array as PropType<IBranch[]>,
      default: () => [],
    },
  },
  emits: {
    'update:selected': null,
    'toggle-check-item': null,
  },
  setup(props, { emit }) {
    const checked = computed({
      get():string[] {
        return props.selected;
      },
      set(value: string[]): void {
        emit('update:selected', value);
      },
    });

    return {
      checked,
    };
  },
});
</script>
