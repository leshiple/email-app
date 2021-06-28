<template>
  <q-list>
    <app-branch-list-item
      v-for="branch in branches"
      :key="branch.id"
      v-model="checked"
      :id="branch.id"
      :last-message-author="branch.lastMessageAuthor"
      :subject="branch.subject"
      :count="branch.count"
      :date="branch.date"
      :labels="branch.labels"
      :starred="branch.starred"
    />
  </q-list>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import AppBranchListItem from 'src/components/AppBranchListItem.vue';
import { IBranch } from 'src/types/Branches.d';

export default defineComponent({
  name: 'AppBranchList',
  components: {
    AppBranchListItem,
  },
  props: {
    branches: {
      type: Array as PropType<IBranch[]>,
      default() {
        return [];
      },
    },
  },
  setup() {
    const checked = ref([]);

    return {
      checked,
    };
  },
});
</script>
