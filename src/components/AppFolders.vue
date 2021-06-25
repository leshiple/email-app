<template>
  <app-card-section-header title-slug="folders" />
  <q-list dense class="q-mb-lg">
    <q-item
      v-for="folder in folders"
      :key="folder.slug"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon color="grey-8" :name="folder.icon" />
      </q-item-section>
      <q-item-section>{{$t(folder.slug)}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppCardSectionHeader from 'src/components/AppCardSectionHeader.vue';

export interface IFolder {
  icon: string
  slug: string
}

export default defineComponent({
  name: 'AppFolders',
  props: {
    folders: {
      type: Array as PropType<IFolder[]>,
      required: true,
    },
  },
  components: {
    AppCardSectionHeader,
  },
});
</script>
