<template>
  <q-list>
    <router-link
      v-for="branch in branches"
      :key="branch.id"
      :to="`/${currentFolder}/${branch.id}`"
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
      />
    </router-link>
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
    currentFolder: {
      type: String,
      required: true,
    },
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
