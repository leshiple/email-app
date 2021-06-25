<template>
  <q-card style="width: 230px" class="q-pb-md">
    <app-compose />
    <app-folders :folders="folders" />
    <q-separator inset class="q-mb-md" />
    <app-labels :labels="labels" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCompose from 'src/components/AppCompose.vue';
import AppFolders from 'src/components/AppFolders.vue';
import AppLabels from 'src/components/AppLabels.vue';

export default defineComponent({
  name: 'AppSidebar',
  components: { AppCompose, AppFolders, AppLabels },
  setup() {
    const folders = [
      {
        slug: 'inbox',
        icon: 'mail',
      },
      {
        slug: 'starred',
        icon: 'star',
      },
      {
        slug: 'draft',
        icon: 'drafts',
      },
      {
        slug: 'sent',
        icon: 'send',
      },
      {
        slug: 'trash',
        icon: 'delete',
      },
    ];

    const labels = [
      {
        name: 'Freelance',
        color: 'pink-4',
      },
      {
        name: 'Friends',
        color: 'teal-4',
      },
      {
        name: 'Social',
        color: 'blue-4',
      },
      {
        name: 'Support',
        color: 'brown-4',
      },
    ];

    return {
      folders,
      labels,
    };
  },
});
</script>
