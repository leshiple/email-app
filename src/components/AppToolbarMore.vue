<template>
  <q-btn-dropdown unelevated color="secondary" :label="$t('more')" class="q-mr-sm">
    <q-list dense style="min-width: 130px">
      <q-item
        v-for="item in items"
        :key="item.slug"
        clickable
        v-ripple
        v-close-popup
        @click="$emit(item.event, item.param)"
      >
        <q-item-section>
          {{$t(item.slug)}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppToolbarMore',
  emits: {
    'toggle-read': null,
  },
  setup() {
    const items = [
      {
        slug: 'markAsRead',
        event: 'toggle-read',
        param: true,
      },
      {
        slug: 'markAsUnread',
        event: 'toggle-read',
        param: false,
      },
    ];

    return {
      items,
    };
  },
});
</script>
