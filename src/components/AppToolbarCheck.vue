<template>
  <q-btn-dropdown unelevated dense color="secondary" :icon="icon" class="q-mr-sm">
    <q-list dense style="min-width: 130px">
      <q-item
        v-for="item in items"
        :key="item.slug"
        clickable
        v-ripple
        v-close-popup
      >
        <q-item-section>
          {{$t(item.slug)}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'AppToolbar',

  setup() {
    const icon = computed(() => 'check_box_outline_blank');

    const items = [
      {
        slug: 'all',
      },
      {
        slug: 'noOne',
      },
      {
        slug: 'read',
      },
      {
        slug: 'unread',
      },
      {
        slug: 'starred',
      },
      {
        slug: 'unstarred',
      },
    ];

    return {
      icon,
      items,
    };
  },
});
</script>
