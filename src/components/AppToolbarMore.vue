<template>
  <q-btn-dropdown unelevated color="secondary" :label="$t('more')" class="q-mr-sm">
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppToolbarMore',
  setup() {
    const items = [
      {
        slug: 'markAsRead',
      },
      {
        slug: 'markAsUnread',
      },
      {
        slug: 'addStar',
      },
      {
        slug: 'removeStar',
      },
    ];

    return {
      items,
    };
  },
});
</script>
